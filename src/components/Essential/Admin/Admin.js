import React from "react";
import styled from "styled-components";
import { db } from "../../../firebase";

var randomPictionaryWords = require("word-pictionary-list");
const List = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;

  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  line-height: 22px;
  margin: 3px;

  font-size: 24px;

  color: #a7a7a7;

  background-color: #0f0f0f;

  border-radius: 5px;
  border: 3px solid black;

  transition: 0.2s ease;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const A_updateSync = () => {
  const currentCycle = () => {
    const DayInMillis = 1000 * 60 * 60 * 24;
    const cycle = Math.floor(Date.now() / DayInMillis);
    // console.log(cycle);
    return cycle;
  };
  const current = currentCycle();

  const selector = current + 1;

  const forgeLength = 7;
  const scaleLength = 7;

  const makeForgeList = () => {
    const forgeNewest = current;
    const forgeList = [];
    for (let i = 0; i < forgeLength; i++) {
      forgeList.push(forgeNewest - i);
    }
    console.log(forgeList);
    return forgeList;
  };
  const makeScaleList = () => {
    const scaleNewest = current - forgeLength;
    const scaleList = [];
    for (let i = 0; i < scaleLength; i++) {
      scaleList.push(scaleNewest - i);
    }
    console.log(scaleList);
    return scaleList;
  };

  db.doc("A_Sync/Cycles").set({
    b_selector: selector,
    c_forgeList: makeForgeList(),
    d_scaleList: makeScaleList(),
  });
}; // cloud

const B_syncToSelector = () => {
  const randomize = new Promise((resolve, reject) => {
    const random = () => {
      var title = randomPictionaryWords({
        exactly: 2,
        wordsPerString: 1,
        join: " ",
      });
      if (title.length > 20) {
        while (title.length > 20) {
          console.log("title too long " + title.length);

          console.log(title);
          title = randomPictionaryWords({
            exactly: 2,
            wordsPerString: 1,
            join: " ",
          });
        }
      }
      const randomCap = title.charAt(0).toUpperCase() + title.slice(1);
      return randomCap;
    };
    // console.log("updating random titles");
    db.doc("A_Sync/Cycles")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const cycle = doc.data().b_selector;
          console.log("shuffling selector cycle " + cycle);
          db.doc(`B_Selector/${cycle}/Titles/Title1`)
            .set({ title: random(), votes: 0 })
            .then(() => {
              db.doc(`B_Selector/${cycle}/Titles/Title2`)
                .set({ title: random(), votes: 0 })
                .then(() => {
                  db.doc(`B_Selector/${cycle}/Titles/Title3`)
                    .set({ title: random(), votes: 0 })
                    .then(() => {
                      resolve();
                    });
                });
            });
        }
      });
  });
  return randomize;
}; // cloud

const C_1_SelectorToForgeManuals = () => {
  const updateCardBuilder = new Promise((resolve, reject) => {
    db.doc("A_Sync/Cycles")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const forgeList = doc.data().c_forgeList; // this is an array
          console.log("forge list: " + forgeList);
          forgeList.forEach((cycle) => {
            // console.log(cycle)
            db.collection(`B_Selector/${cycle}/Titles`)
              .orderBy("votes", "desc")
              .limit(1)
              .get()
              .then((collection) => {
                console.log("Selector collection found for cycle " + cycle);
                collection.forEach((doc) => {
                  if (doc.exists) {
                    console.log(`updating C_1_Forge_Manuals/${cycle}`);
                    db.doc(`C_1_Forge_Manuals/${cycle}`).set(
                      {
                        title: doc.data().title,
                        titleVotes: doc.data().votes,
                        cycle: cycle,
                        _wins: 1,
                        _losses: 1,
                        winrate: 0.5,
                      },
                      { merge: false }
                    );
                  } else {
                    console.log("selector doc doesnt exist");
                  }
                });
              })
              .catch((err) => console.log(err));
          });
        }
      });
  });
  return updateCardBuilder;
}; // cloud

const C_2_UserForgeGhost = () => {
  // sample of what the use can generate in the forge
  const materials = {
    cycle: 18747,
    ownerId: "expample_user_id",
    creatorId: "example_user_id",
    displayName: "Any non vulgar Name!",
    url: "testUrl",
    urlSmall: "testUrlSmall",
  }; // turn materials in a function input in the actual version
  db.doc("A_Sync/Cycles")
    .get()
    .then((doc) => {
      if (doc.exists) {
        const forgeList = doc.data().c_forgeList;
        if (forgeList.includes(materials.cycle)) {
          // verify cycle is in the active forge list
          console.log("material cycle included");
          //get this cycle's forge manual
          db.doc(`C_1_Forge_Manuals/${materials.cycle}`)
            .get()
            .then((doc) => {
              if (doc.exists) {
                const manual = doc.data();
                // console.log(manual)
                // console.log(materials)
                const forge_ghost = { ...manual, ...materials };
                console.log(forge_ghost);
                db.doc(
                  `C_2_Forge_Ghosts/Cycles/${forge_ghost.cycle}/${forge_ghost.creatorId}`
                )
                  .set(forge_ghost)
                  .then(() => {
                    console.log("forge ghost created");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                console.log("manual for this Cycle doesn't exist");
              }
            });
        } else {
          console.log(`invalid Forge Cycle ${materials.cycle},forge list: ` + forgeList );
        }
      }
    });
}; // user
const C_3_UserDeleteGhost = () => {
  const cycle = 18753;
  const userID = "example_user_id";
  db.doc(`C_2_Forge_Ghosts/Cycles/${cycle}/${userID}`).delete();
}; // user
const D_1_ForgeGhostsToScales = () => {
  db.doc("A_Sync/Cycles")// get scale list
    .get()
    .then((doc) => {
      if (doc.exists) {
        const scaleList = doc.data().d_scaleList;
        console.log(scaleList);
        scaleList.forEach((cycle) => { // for each cycle in scale list get ghost cycles
          // console.log("scaleList: " + scaleList);
          db.collection(`C_2_Forge_Ghosts/Cycles/${cycle}`)
            .get()
            .then((collection) => {
              if (collection.size > 0) {// if collection is not empty
                console.log(`Ghost Collection in Cycle ${cycle} exists, collection size: ${collection.size}`);
                collection.forEach((doc) => {
                  if (doc.exists) {
                    console.log(doc.data().cycle);

                  } else {
                    console.log("no ghosts in cycle " + cycle);
                  }
                });
              }else{
                // console.log(`collection ${cycle} is empty.`)
              }
            });
        });
      } else {
        console.log("scale list doesnt Exist");
      }
    });
}; // cloud

// const Experiment_1 = ()=>{

// }

function Admin() {
  return (
    <div>
      <List>
        <h1>Admin</h1>

        <Button
          onClick={() => {
            A_updateSync();
          }}
        >
          A update Sync
        </Button>

        <Button
          onClick={() => {
            B_syncToSelector();
          }}
        >
          B sync to Selector
        </Button>
        <Button
          onClick={() => {
            C_1_SelectorToForgeManuals();
          }}
        >
          C_1 Selector to Forge Manuals
        </Button>
        <Button
          onClick={() => {
            C_2_UserForgeGhost();
          }}
        >
          C_2 User Forge Ghost
        </Button>
        {/* <Button
          onClick={() => {
            C_3_UserDeleteGhost();
          }}
        >
          C_3 User Delete Ghost
        </Button> */}
        <Button
          onClick={() => {
            D_1_ForgeGhostsToScales();
          }}
        >
          D_1 Forge Ghost To Scales
        </Button>
      </List>
    </div>
  );
}

export default Admin;
