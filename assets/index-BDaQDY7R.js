(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{label:`Free weights & benches`,items:{dumbbells:`Dumbbells`,barbell:`Barbell & plates`,"ez-bar":`EZ curl bar`,"bench-press":`Bench press station`,"squat-rack":`Squat rack`,"decline-bench":`Decline sit-up bench`,"pull-up-bar":`Pull-up bar / captain's chair`,"ab-wheel":`Ab wheel`}},{label:`Cables`,items:{cable:`Cable station`,"lat-pulldown":`Lat pulldown`,"cable-row":`Seated cable row`}},{label:`Machines`,items:{"smith-machine":`Smith machine`,"chest-press-machine":`Chest press machine`,"incline-press-machine":`Incline press machine`,"shoulder-press-machine":`Shoulder press machine`,"lateral-raise-machine":`Lateral raise machine`,"pec-deck":`Pec deck / rear delt machine`,"assisted-pull-up":`Assisted pull-up machine`,"t-bar-row":`T-bar row`,"preacher-curl-machine":`Preacher curl machine`,"hack-squat":`Hack squat`,"leg-press":`Leg press`,"leg-extension":`Leg extension`,"seated-leg-curl":`Seated leg curl`,"lying-leg-curl":`Lying leg curl`,"standing-calf-raise":`Standing calf raise machine`,"seated-calf-raise":`Seated calf raise machine`}}],t=Object.fromEntries(e.flatMap(e=>Object.entries(e.items))),n={push:`Push`,pull:`Pull`,legs:`Legs`},r={push:[{label:`Chest press`,options:[{name:`Barbell Bench Press`,equipment:`bench-press`,targetMuscles:[`Chest`,`Front delts`,`Triceps`],sets:4,reps:`6–8`,cues:[`Shoulder blades squeezed back and down`,`Lower the bar to mid-chest, elbows about 45° from your body`,`Feet planted, press the bar up and slightly back`]},{name:`Dumbbell Bench Press`,equipment:`dumbbells`,targetMuscles:[`Chest`,`Front delts`,`Triceps`],sets:4,reps:`8–10`,cues:[`Kick the dumbbells up from your knees as you lie back`,`Lower until you feel a stretch across your chest`,`Press up and slightly together without clanking the weights`]},{name:`Machine Chest Press`,equipment:`chest-press-machine`,targetMuscles:[`Chest`,`Front delts`,`Triceps`],sets:3,reps:`8–12`,cues:[`Set the seat so the handles line up with mid-chest`,`Keep your back against the pad the whole time`,`Control the weight back; don't let the stack touch down`]}]},{label:`Upper chest`,options:[{name:`Incline Dumbbell Press`,equipment:`dumbbells`,targetMuscles:[`Upper chest`,`Front delts`,`Triceps`],sets:3,reps:`8–10`,cues:[`Bench at about 30°, not steeper`,`Lower the dumbbells to the sides of your upper chest`,`Keep your wrists stacked over your elbows`]},{name:`Incline Smith Machine Press`,equipment:`smith-machine`,targetMuscles:[`Upper chest`,`Front delts`,`Triceps`],sets:3,reps:`8–10`,cues:[`Position the bench so the bar touches your upper chest`,`Shoulder blades pinned back`,`Use the safety hooks; twist to rack`]},{name:`Incline Machine Press`,equipment:`incline-press-machine`,targetMuscles:[`Upper chest`,`Front delts`,`Triceps`],sets:3,reps:`10–12`,cues:[`Handles start just above chest height`,`Chest up, back flat on the pad`,`Slow 2–3 second lowering`]}]},{label:`Shoulder press`,options:[{name:`Seated Dumbbell Shoulder Press`,equipment:`dumbbells`,targetMuscles:[`Front delts`,`Side delts`,`Triceps`],sets:3,reps:`8–10`,cues:[`Bench upright, back against the pad`,`Lower until the dumbbells are about ear height`,`Don't arch your lower back to finish the rep`]},{name:`Machine Shoulder Press`,equipment:`shoulder-press-machine`,targetMuscles:[`Front delts`,`Side delts`,`Triceps`],sets:3,reps:`10–12`,cues:[`Handles start around shoulder height`,`Press straight up without locking out hard`,`Keep your head neutral against the pad`]},{name:`Arnold Press`,equipment:`dumbbells`,targetMuscles:[`Front delts`,`Side delts`,`Triceps`],sets:3,reps:`8–12`,cues:[`Start with palms facing you at chin height`,`Rotate palms forward as you press up`,`Reverse the rotation on the way down`]}]},{label:`Side delts`,options:[{name:`Dumbbell Lateral Raise`,equipment:`dumbbells`,targetMuscles:[`Side delts`],sets:3,reps:`12–15`,cues:[`Slight bend in the elbows, lean a little forward`,`Raise out to the sides until arms are about parallel to the floor`,`Lead with your elbows; no swinging`]},{name:`Cable Lateral Raise`,equipment:`cable`,targetMuscles:[`Side delts`],sets:3,reps:`12–15`,cues:[`Set the pulley at the lowest position, one arm at a time`,`Cable runs in front of your body`,`Raise to shoulder height and lower slowly`]},{name:`Machine Lateral Raise`,equipment:`lateral-raise-machine`,targetMuscles:[`Side delts`],sets:3,reps:`12–15`,cues:[`Shoulders line up with the machine's pivot`,`Push with your elbows against the pads`,`Pause briefly at the top`]}]},{label:`Triceps`,options:[{name:`Cable Triceps Pushdown`,equipment:`cable`,targetMuscles:[`Triceps`],sets:3,reps:`10–12`,cues:[`Elbows pinned to your sides`,`Push down until your arms are straight, then squeeze`,`Only your forearms move`]},{name:`Overhead Cable Triceps Extension`,equipment:`cable`,targetMuscles:[`Triceps (long head)`],sets:3,reps:`10–12`,cues:[`Face away from the cable, rope behind your head`,`Elbows point forward and stay still`,`Get a deep stretch at the bottom`]},{name:`EZ-Bar Skull Crusher`,equipment:`ez-bar`,targetMuscles:[`Triceps`],sets:3,reps:`8–12`,cues:[`Lower the bar to just behind your forehead`,`Upper arms stay angled slightly back`,`Start light; this is hard on the elbows if rushed`]}]},{label:`Chest fly`,options:[{name:`Cable Fly`,equipment:`cable`,targetMuscles:[`Chest`],sets:3,reps:`12–15`,cues:[`Pulleys at about shoulder height, staggered stance`,`Keep a soft bend in the elbows`,`Bring your hands together in front of your chest in a hugging motion`]},{name:`Pec Deck`,equipment:`pec-deck`,targetMuscles:[`Chest`],sets:3,reps:`12–15`,cues:[`Handles at chest height`,`Chest up, shoulders down`,`Squeeze for a second when the handles meet`]},{name:`Dumbbell Fly`,equipment:`dumbbells`,targetMuscles:[`Chest`],sets:3,reps:`10–12`,cues:[`Slight bend in the elbows that doesn't change`,`Lower out wide until you feel a chest stretch`,`Go lighter than you think`]}]}],pull:[{label:`Vertical pull`,options:[{name:`Lat Pulldown`,equipment:`lat-pulldown`,targetMuscles:[`Lats`,`Biceps`,`Rear delts`],sets:4,reps:`8–10`,cues:[`Thighs locked under the pad, slight lean back`,`Pull the bar to your upper chest, elbows down and back`,`Let your arms fully straighten at the top`]},{name:`Pull-Up`,equipment:`pull-up-bar`,load:`bodyweight`,targetMuscles:[`Lats`,`Biceps`,`Rear delts`],sets:4,reps:`6–10`,cues:[`Start from a dead hang, shoulders pulled down`,`Pull your chest toward the bar`,`No kipping; lower under control`]},{name:`Assisted Pull-Up Machine`,equipment:`assisted-pull-up`,load:`assisted`,targetMuscles:[`Lats`,`Biceps`,`Rear delts`],sets:3,reps:`8–12`,cues:[`More counterweight = easier`,`Pull until your chin clears the handles`,`Full stretch at the bottom of each rep`]}]},{label:`Row`,options:[{name:`Seated Cable Row`,equipment:`cable-row`,targetMuscles:[`Mid back`,`Lats`,`Biceps`],sets:4,reps:`8–12`,cues:[`Sit tall; don't rock your torso back and forth`,`Pull the handle to your stomach`,`Squeeze your shoulder blades together at the end`]},{name:`Chest-Supported Dumbbell Row`,equipment:`dumbbells`,targetMuscles:[`Mid back`,`Lats`,`Rear delts`],sets:3,reps:`8–12`,cues:[`Chest on an incline bench, dumbbells hanging`,`Drive your elbows back toward your hips`,`Chest stays on the pad`]},{name:`Barbell Row`,equipment:`barbell`,targetMuscles:[`Mid back`,`Lats`,`Lower back`],sets:3,reps:`6–10`,cues:[`Hinge until your torso is about 45°, back flat`,`Pull the bar to your lower ribs`,`If your back rounds, the weight is too heavy`]},{name:`T-Bar Row`,equipment:`t-bar-row`,targetMuscles:[`Mid back`,`Lats`],sets:3,reps:`8–10`,cues:[`Chest on the pad if the machine has one`,`Pull with your elbows, not your hands`,`Pause with the weight close to your chest`]}]},{label:`Lat isolation`,options:[{name:`Straight-Arm Cable Pulldown`,equipment:`cable`,targetMuscles:[`Lats`],sets:3,reps:`12–15`,cues:[`Arms nearly straight, slight hip hinge`,`Sweep the bar or rope down to your thighs`,`Feel it in your lats, not your triceps`]},{name:`Single-Arm Cable Row`,equipment:`cable`,targetMuscles:[`Lats`,`Mid back`],sets:3,reps:`10–12`,cues:[`Let your shoulder stretch forward at the start`,`Pull your elbow back past your torso`,`Keep your hips square`]},{name:`Single-Arm Dumbbell Row`,equipment:`dumbbells`,targetMuscles:[`Lats`,`Mid back`],sets:3,reps:`8–12`,cues:[`One knee and hand on the bench, back flat`,`Row the dumbbell toward your hip`,`Don't twist your torso to lift it`]}]},{label:`Rear delts`,options:[{name:`Face Pull`,equipment:`cable`,targetMuscles:[`Rear delts`,`Upper back`],sets:3,reps:`12–15`,cues:[`Rope at upper-chest to face height`,`Pull toward your forehead, hands apart`,`Finish with your hands beside your ears`]},{name:`Reverse Pec Deck`,equipment:`pec-deck`,targetMuscles:[`Rear delts`,`Upper back`],sets:3,reps:`12–15`,cues:[`Face the pad, handles at shoulder height`,`Sweep your arms back in a wide arc`,`Don't shrug your shoulders up`]},{name:`Bent-Over Dumbbell Rear Delt Fly`,equipment:`dumbbells`,targetMuscles:[`Rear delts`],sets:3,reps:`12–15`,cues:[`Hinge forward, back flat`,`Raise the dumbbells out to the sides with a soft elbow bend`,`Light weight, slow reps`]}]},{label:`Biceps`,options:[{name:`Dumbbell Curl`,equipment:`dumbbells`,targetMuscles:[`Biceps`],sets:3,reps:`10–12`,cues:[`Elbows stay by your sides`,`Turn your palms up as you curl`,`Lower slowly; no swinging`]},{name:`Incline Dumbbell Curl`,equipment:`dumbbells`,targetMuscles:[`Biceps (long head)`],sets:3,reps:`10–12`,cues:[`Bench at about 45°, arms hanging straight down`,`Curl without moving your upper arms forward`,`Full stretch at the bottom`]},{name:`EZ-Bar Curl`,equipment:`ez-bar`,targetMuscles:[`Biceps`],sets:3,reps:`8–12`,cues:[`Grip on the angled part of the bar`,`Stand tall; don't lean back to lift it`,`Squeeze at the top`]},{name:`Preacher Curl Machine`,equipment:`preacher-curl-machine`,targetMuscles:[`Biceps`],sets:3,reps:`10–12`,cues:[`Armpits snug against the top of the pad`,`Don't let the weight drop at the bottom`,`Stop just short of locking your elbows`]}]},{label:`Forearms & brachialis`,options:[{name:`Hammer Curl`,equipment:`dumbbells`,targetMuscles:[`Brachialis`,`Forearms`],sets:3,reps:`10–12`,cues:[`Palms face each other the whole time`,`Curl straight up, elbows still`,`Alternate arms or do both together`]},{name:`Cable Rope Hammer Curl`,equipment:`cable`,targetMuscles:[`Brachialis`,`Forearms`],sets:3,reps:`12–15`,cues:[`Rope on the low pulley`,`Thumbs up, elbows by your sides`,`Constant tension; don't rest at the bottom`]},{name:`Reverse-Grip EZ-Bar Curl`,equipment:`ez-bar`,targetMuscles:[`Forearms`,`Brachialis`],sets:3,reps:`10–12`,cues:[`Palms facing down`,`Wrists stay straight`,`Lighter than your regular curl`]}]}],legs:[{label:`Squat`,options:[{name:`Barbell Back Squat`,equipment:`squat-rack`,weightStep:10,targetMuscles:[`Quads`,`Glutes`,`Adductors`],sets:4,reps:`5–8`,cues:[`Bar on your upper back, brace your core before each rep`,`Knees track over your toes`,`Go as deep as you can with a flat back`]},{name:`Hack Squat`,equipment:`hack-squat`,weightStep:10,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`8–10`,cues:[`Feet shoulder-width, middle of the platform`,`Lower until your thighs are at least parallel`,`Back stays flat against the pad`]},{name:`Leg Press`,equipment:`leg-press`,weightStep:10,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`10–12`,cues:[`Lower back stays on the seat; don't let it curl up`,`Lower until your knees are near your chest`,`Don't lock your knees at the top`]},{name:`Goblet Squat`,equipment:`dumbbells`,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`10–12`,cues:[`Hold a dumbbell at your chest`,`Sit down between your heels, chest up`,`Elbows go inside your knees at the bottom`]}]},{label:`Hip hinge`,options:[{name:`Romanian Deadlift`,equipment:`barbell`,weightStep:10,targetMuscles:[`Hamstrings`,`Glutes`,`Lower back`],sets:3,reps:`8–10`,cues:[`Soft knees, push your hips straight back`,`Bar slides down your thighs, back flat`,`Stop when your hamstrings are fully stretched`]},{name:`Dumbbell Romanian Deadlift`,equipment:`dumbbells`,targetMuscles:[`Hamstrings`,`Glutes`],sets:3,reps:`10–12`,cues:[`Dumbbells close to your legs`,`Hips back, not down`,`Squeeze your glutes to stand up`]},{name:`Barbell Hip Thrust`,equipment:`barbell`,weightStep:10,targetMuscles:[`Glutes`,`Hamstrings`],sets:3,reps:`8–12`,cues:[`Upper back on a bench, bar padded over your hips`,`Drive through your heels until your hips are level`,`Chin tucked; don't arch your lower back`]}]},{label:`Single-leg / quads`,options:[{name:`Bulgarian Split Squat`,equipment:`dumbbells`,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`8–10 each leg`,cues:[`Back foot on a bench, front foot far enough forward`,`Drop your back knee straight down`,`Most of your weight stays on the front leg`]},{name:`Walking Lunge`,equipment:`dumbbells`,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`10 each leg`,cues:[`Long steps, torso upright`,`Back knee lowers close to the floor`,`Push through your front heel`]},{name:`Leg Extension`,equipment:`leg-extension`,targetMuscles:[`Quads`],sets:3,reps:`12–15`,cues:[`Knees line up with the machine's pivot`,`Kick up until your legs are straight, squeeze`,`Lower slowly`]}]},{label:`Hamstring curl`,options:[{name:`Seated Leg Curl`,equipment:`seated-leg-curl`,targetMuscles:[`Hamstrings`],sets:3,reps:`10–12`,cues:[`Lock the thigh pad down tight`,`Curl your heels under the seat`,`Lean your torso forward slightly for more stretch`]},{name:`Lying Leg Curl`,equipment:`lying-leg-curl`,targetMuscles:[`Hamstrings`],sets:3,reps:`10–12`,cues:[`Hips pressed into the pad`,`Curl the pad toward your glutes`,`Don't let the weight slam down`]},{name:`Single-Leg Cable Curl`,equipment:`cable`,targetMuscles:[`Hamstrings`],sets:3,reps:`12 each leg`,cues:[`Ankle strap on the low pulley, face the machine`,`Curl your heel toward your glute`,`Keep your hips still`]}]},{label:`Calves`,options:[{name:`Standing Calf Raise`,equipment:`standing-calf-raise`,targetMuscles:[`Calves`],sets:4,reps:`10–15`,cues:[`Balls of your feet on the edge`,`Pause at the bottom in a full stretch`,`Rise as high as you can on your toes`]},{name:`Seated Calf Raise`,equipment:`seated-calf-raise`,targetMuscles:[`Calves (soleus)`],sets:4,reps:`12–15`,cues:[`Pad snug on your lower thighs`,`Full stretch at the bottom, pause`,`Slow, controlled reps`]},{name:`Leg Press Calf Raise`,equipment:`leg-press`,targetMuscles:[`Calves`],sets:4,reps:`12–15`,cues:[`Only the balls of your feet on the platform`,`Keep your knees straight but not locked`,`Keep the safety handles in reach`]}]}]},i=[{label:`Abs`,options:[{name:`Cable Crunch`,equipment:`cable`,targetMuscles:[`Abs`],sets:3,reps:`12–15`,cues:[`Kneel facing the cable, rope beside your head`,`Curl your ribs toward your hips; your hips stay still`,`Pull with your abs, not your arms`]},{name:`Hanging Knee Raise`,equipment:`pull-up-bar`,load:`bodyweight`,targetMuscles:[`Abs`,`Hip flexors`],sets:3,reps:`10–15`,cues:[`Hang from the bar, or use the captain's chair`,`Bring your knees toward your chest and tilt your pelvis up`,`No swinging; lower slowly`]},{name:`Ab Wheel Rollout`,equipment:`ab-wheel`,load:`bodyweight`,targetMuscles:[`Abs`,`Core`],sets:3,reps:`8–12`,cues:[`Start on your knees, wheel under your shoulders`,`Roll out only as far as you can keep your lower back flat`,`Pull back with your abs, not your hips`]},{name:`Decline Sit-Up`,equipment:`decline-bench`,load:`bodyweight`,targetMuscles:[`Abs`,`Hip flexors`],sets:3,reps:`10–15`,cues:[`Feet hooked under the pads`,`Curl up one vertebra at a time`,`Hold a plate on your chest once it gets easy`]}]},{label:`Obliques & core`,options:[{name:`Cable Woodchop`,equipment:`cable`,targetMuscles:[`Obliques`,`Core`],sets:3,reps:`10–12 each side`,cues:[`Pulley high, pull diagonally down across your body`,`Turn through your torso and pivot your back foot`,`Arms stay mostly straight`]},{name:`Pallof Press`,equipment:`cable`,targetMuscles:[`Obliques`,`Core`],sets:3,reps:`10–12 each side`,cues:[`Stand side-on to the cable, handle at your chest`,`Press straight out and don't let it twist you`,`Hold for a second with your arms straight`]},{name:`Hanging Oblique Knee Raise`,equipment:`pull-up-bar`,load:`bodyweight`,targetMuscles:[`Obliques`,`Abs`],sets:3,reps:`8–12 each side`,cues:[`Hang from the bar`,`Raise your knees up and toward one side`,`Alternate sides, no swinging`]}]}];function a(e){switch(e.load){case`bodyweight`:return`Bodyweight. Once you hit ${e.reps} reps on every set, slow the reps down or add weight.`;case`assisted`:return`Set the counterweight so you can do ${e.reps} reps with about 2 left. Less counterweight = harder.`;default:return`Pick a weight you can do for ${e.reps} reps with about 2 reps left in the tank. If the last set feels easy, go up next time.`}}function o(e){return`https://www.youtube.com/results?search_query=${encodeURIComponent(`${e.name} proper form`)}`}function s(e){let t=Number(e.trim());return e.trim()!==``&&Number.isInteger(t)&&t>=1&&t<=100?t:null}function c(e){let t=Number(e.trim());return e.trim()!==``&&Number.isFinite(t)&&t>=0&&t<=2e3?t:null}function l(e,t){return t.trim()!==``&&(e===`reps`?s(t):c(t))===null}function u(e,t,n){let{sets:r}=e[t].options[n];return Array.from({length:r},()=>({weight:``,reps:``}))}function d(e,t){return t.map((t,n)=>u(e,n,t))}function f(e){return e.flat().filter(e=>s(e.reps)!==null).length}function p(e){return e.flatMap(e=>{let t=s(e.reps);return t===null?[]:[{weight:c(e.weight),reps:t}]})}function m(e,t,n){return e.map((e,r)=>({name:e.options[t[r]].name,sets:p(n[r])})).filter(e=>e.sets.length>0)}function h(e){let t=e.map(e=>e.reps).join(` · `),n=new Set(e.map(e=>e.weight));if(n.size===1){let[e]=n;return e===null?`${t} reps`:`${e} lb × ${t}`}return e.map(e=>e.weight===null?`${e.reps}`:`${e.weight}×${e.reps}`).join(` · `)}function g(e){let t=l(`weight`,e.weight)||l(`reps`,e.reps);return[`set-row`,s(e.reps)===null?``:`done`,t?`invalid`:``].join(` `)}var _=e=>e.flat().some(e=>l(`weight`,e.weight)||l(`reps`,e.reps)),v=()=>!0;function ee(e,t){return t?[...r[e],...i]:r[e]}function y(e,t){return e.options.flatMap((e,n)=>t(e)?[n]:[])}function te(e,t=Math.random,n=v){return e.map(e=>{let r=y(e,n),i=r.length>0?r:e.options.map((e,t)=>t);return i[Math.floor(t()*i.length)]})}function ne(e,t,n,r=Math.random){let i=y(e,n).filter(e=>e!==t);return i.length>0?i[Math.floor(r()*i.length)]:null}function re(e,t,n){return e.map((e,r)=>r===t?n:e)}function ie(e,t){return e.map((e,n)=>e.options[t[n]])}var b=`ppl-workout-log`,x=`ppl-workout-draft`,S=`ppl-missing-equipment`,C=/^\d{4}-\d{2}-\d{2}$/;function ae(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}var w=e=>typeof e==`object`&&!!e,T=e=>typeof e==`string`&&e in n,E=e=>typeof e==`string`&&e in t;function D(e){if(!w(e))return!1;let{weight:t,reps:n}=e;return(t===null||typeof t==`number`&&t>=0&&t<=2e3)&&Number.isInteger(n)&&n>=1&&n<=100}function O(e){return w(e)&&typeof e.name==`string`&&Array.isArray(e.sets)&&e.sets.every(D)}function k(e){if(!w(e)||typeof e.date!=`string`||!C.test(e.date)||!T(e.day))return null;let t=Array.isArray(e.exercises)?e.exercises.filter(O):[];return{date:e.date,day:e.day,exercises:t}}function A(e){if(!w(e)||!T(e.day)||!Array.isArray(e.workout)||!Array.isArray(e.sets)||typeof e.abs!=`boolean`||!Array.isArray(e.taken)||!e.taken.every(E)||e.startedAt!==void 0&&typeof e.startedAt!=`number`)return!1;let t=ee(e.day,e.abs),n=e.sets;return e.workout.length===t.length&&n.length===t.length&&e.workout.every((e,n)=>Number.isInteger(e)&&e>=0&&e<t[n].options.length)&&n.every(e=>Array.isArray(e)&&e.every(e=>w(e)&&typeof e.weight==`string`&&typeof e.reps==`string`))}function j(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function M(e,t){try{return t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function N(e){return Array.isArray(e)?e.map(k).filter(e=>e!==null):[]}function P(e){return Array.isArray(e)?e.filter(E):[]}var oe=()=>N(j(b)),F=e=>M(b,e);function se(){let e=j(x);return w(e)&&(e.abs??=!1,e.taken??=[]),A(e)?e:null}var ce=e=>M(x,e),le=()=>P(j(S)),ue=e=>M(S,e);function de(e,t){return[...e].reverse().sort((e,t)=>t.date.localeCompare(e.date)).flatMap(e=>e.exercises).find(e=>e.name===t)}var I=`ppl-last-backup`;function fe(){let e=j(I);return typeof e==`string`&&C.test(e)?e:null}var pe=e=>M(I,e),L=`ppl-at-the-arc`;function me(e,t,n){return{app:L,version:1,exportedAt:n.toISOString(),log:e,missingEquipment:t}}function he(e){return`ppl-backup-${e}.json`}function ge(e){let t;try{t=JSON.parse(e)}catch{return null}if(typeof t!=`object`||!t||t.app!==L)return null;let{log:n,missingEquipment:r}=t;return{log:N(n),missingEquipment:P(r)}}function _e(e,t){let n=new Set(e.map(e=>JSON.stringify(e))),r=t.filter(e=>{let t=JSON.stringify(e);return!n.has(t)&&(n.add(t),!0)});return{log:[...e,...r].sort((e,t)=>e.date.localeCompare(t.date)),added:r.length}}function ve(e,t){let n=new Date(e,t,1).getDay(),r=new Date(e,t+1,0).getDate();return[...Array(n).fill(null),...Array.from({length:r},(e,t)=>t+1)]}function ye(e,t,n){let r=new Date(e,t+n,1);return{year:r.getFullYear(),month:r.getMonth()}}function R(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`)}function be(e){return e.exercises.map(e=>e.sets.map(e=>({weight:e.weight===null?``:String(e.weight),reps:String(e.reps)})))}function z(e,t,n){return`
    ${e.exercises.map((e,n)=>`
        <div class="edit-exercise">
          <h4>${e.name}</h4>
          ${t.inputs[n].map((t,r)=>`
                <div class="${g(t)}">
                  <span class="set-number">${r+1}</span>
                  <label class="field">
                    <input type="text" inputmode="decimal" autocomplete="off" data-edit="${n}:${r}:weight"
                      value="${R(t.weight)}" aria-label="${e.name} set ${r+1} weight in pounds" />
                    <span>lb</span>
                  </label>
                  <label class="field">
                    <input type="text" inputmode="numeric" autocomplete="off" data-edit="${n}:${r}:reps"
                      value="${R(t.reps)}" aria-label="${e.name} set ${r+1} reps" />
                    <span>reps</span>
                  </label>
                </div>`).join(``)}
        </div>`).join(``)||`<p class="hint">No sets were logged in this workout.</p>`}
    <p class="hint small">Clear a set's reps to remove that set.</p>
    ${n?`<p class="finish-error" role="alert">${n}</p>`:``}
    <div class="edit-buttons">
      <button type="button" class="secondary" data-action="cancel-edit">Cancel</button>
      <button type="button" class="finish" data-action="save-edit">Save changes</button>
    </div>`}function B(e,t,r,i){let a=r?.index===t,o=a?z(e,r,i):e.exercises.length>0?`<ul class="session-list">
          ${e.exercises.map(e=>`
                <li class="session-row">
                  <span>${e.name}</span>
                  <span class="muted">${h(e.sets)}</span>
                </li>`).join(``)}
        </ul>`:`<p class="hint">No sets logged.</p>`,s=a?``:`<div class="card-buttons">
        <button type="button" data-action="edit-workout" data-index="${t}">Edit</button>
        <button type="button" class="danger" data-action="delete-workout" data-index="${t}">Delete</button>
      </div>`;return`
    <section class="card day-workout day-${e.day}">
      <div class="day-workout-header">
        <h3>${n[e.day]} day</h3>
        ${s}
      </div>
      ${o}
    </section>`}function xe(e,t,n,r,i){let[a,o,s]=t.split(`-`).map(Number);return`
    <button type="button" class="link-button back-link" data-action="home">‹ Calendar</button>
    <h2 class="section-title">${new Date(a,o-1,s).toLocaleDateString(void 0,{weekday:`long`,month:`long`,day:`numeric`})}</h2>
    ${i}
    ${e.map((e,i)=>e.date===t?B(e,i,n,r):``).join(``)||`<p class="hint">No workouts on this day.</p>`}
  `}var V=[45,35,25,10,5,2.5],Se=[`barbell`,`bench-press`,`squat-rack`];function H(e){if(e<45)return null;let t=(e-45)/2,n=[];for(let e of V)for(;t>=e;)n.push(e),t-=e;return{perSide:n,total:45+n.reduce((e,t)=>e+t,0)*2}}function U(e){let[,t,n]=e.match(/(\d+)(?:–(\d+))?/);return{min:Number(t),max:Number(n??t)}}function Ce(e,t){let{min:n,max:r}=U(e.reps),i=e.weightStep??5,a=t.sets.length>=e.sets&&t.sets.every(e=>e.reps>=r),o=t.sets.filter(e=>e.reps<n).length>t.sets.length/2,s=t.sets.map(e=>e.weight).filter(e=>e!==null);if(s.length===0)return a?{direction:`up`,weight:null,message:`You hit ${r} on every set. Make it harder: add weight or slow the reps down.`}:{direction:`same`,weight:null,message:`Aim for one more rep per set than last time.`};if(e.load===`assisted`){let e=Math.min(...s);if(a){let t=Math.max(e-i,0);return{direction:`up`,weight:t,message:`You hit ${r} on every set. Lower the counterweight to ${t} lb.`}}if(o){let t=e+i;return{direction:`down`,weight:t,message:`Most sets were under ${n} reps. Raise the counterweight to ${t} lb.`}}return{direction:`same`,weight:e,message:`Stay at ${e} lb counterweight and aim for one more rep per set.`}}let c=Math.max(...s);if(a){let e=c+i;return{direction:`up`,weight:e,message:`You hit ${r} on every set. Go up to ${e} lb today.`}}if(o&&c>0){let e=Math.max(c-i,0);return{direction:`down`,weight:e,message:`Most sets were under ${n} reps. Drop to ${e} lb and own the reps.`}}return{direction:`same`,weight:c,message:`Stay at ${c} lb and aim for one more rep per set.`}}function W(e,t){return[...e].sort((e,t)=>e.date.localeCompare(t.date)).flatMap(e=>e.exercises.filter(e=>e.name===t).map(t=>{let n=t.sets.map(e=>e.weight).filter(e=>e!==null);return{date:e.date,sets:t.sets,topWeight:n.length>0?Math.max(...n):null,bestReps:Math.max(...t.sets.map(e=>e.reps))}}))}function G(e){let t=new Map;for(let n of e)for(let{name:e}of n.exercises){let r=t.get(e);t.set(e,{name:e,sessions:(r?.sessions??0)+1,lastDate:r&&r.lastDate>n.date?r.lastDate:n.date})}return[...t.values()].sort((e,t)=>t.lastDate.localeCompare(e.lastDate)||e.name.localeCompare(t.name))}function K(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function q(e){return e.some(e=>e.topWeight!==null)?{unit:`lb`,values:e.map(e=>e.topWeight??0)}:{unit:`reps`,values:e.map(e=>e.bestReps)}}function J(e){let t=Object.keys(r),n=t=>t.some(t=>t.options.some(t=>t.name===e));return t.find(e=>n(r[e]))??null}var we=e=>{let t=J(e);return t?`day-${t}`:``},Y=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function Te(e){let t=G(e).length;return t===0?``:`
    <button type="button" class="card progress-card" data-action="progress">
      <span>
        <strong>Your progress</strong>
        <span class="muted">${Y(t,`exercise`)} logged</span>
      </span>
      <span class="chevron">›</span>
    </button>`}function Ee(e){let t=G(e);return`
    <div class="workout-header">
      <h2>Your progress</h2>
      <button type="button" class="secondary" data-action="home">Done</button>
    </div>
    ${t.length===0?`<p class="hint">Nothing logged yet. Log some sets in a workout and tap <strong>Finish workout</strong>, and each exercise will show up here.</p>`:`<ul class="progress-list">
          ${t.map(e=>`
                <li>
                  <button type="button" class="progress-row ${we(e.name)}" data-history="${e.name}">
                    <span class="progress-dot"></span>
                    <span class="progress-name">${e.name}</span>
                    <span class="muted">${Y(e.sessions,`session`)} · ${K(e.lastDate)}</span>
                  </button>
                </li>`).join(``)}
        </ul>`}
  `}function De(e){let{unit:t,values:n}=q(e),[r,i]=[320,170],[a,o,s,c]=[40,14,18,28],l=Math.min(...n),u=Math.max(...n),d=u===l?5:(u-l)*.15,[f,p]=[Math.max(l-d,0),u+d],m=e=>a+e*(r-a-o)/(n.length-1),h=e=>s+(p-e)*(i-s-c)/(p-f),g=n.map((e,t)=>`${m(t).toFixed(1)},${h(e).toFixed(1)}`).join(` `),_=n.length-1;return`
    <svg class="chart" viewBox="0 0 ${r} ${i}" role="img"
      aria-label="${t===`lb`?`Top weight`:`Best reps`} per session, from ${n[0]} to ${n[_]} ${t}">
      <line class="chart-axis" x1="${a}" y1="${i-c}" x2="${r-o}" y2="${i-c}" />
      <text class="chart-label" x="${a-6}" y="${h(u)+4}" text-anchor="end">${u}</text>
      ${l===u?``:`<text class="chart-label" x="${a-6}" y="${h(l)+4}" text-anchor="end">${l}</text>`}
      <text class="chart-label" x="${a}" y="${i-8}">${K(e[0].date)}</text>
      <text class="chart-label" x="${r-o}" y="${i-8}" text-anchor="end">${K(e[_].date)}</text>
      <polyline class="chart-line" points="${g}" />
      ${n.map((e,t)=>`<circle class="chart-point" cx="${m(t).toFixed(1)}" cy="${h(e).toFixed(1)}" r="4" />`).join(``)}
      <text class="chart-value" x="${m(_)}" y="${h(n[_])-10}" text-anchor="end">${n[_]} ${t}</text>
    </svg>`}function Oe(e){let{unit:t,values:n}=q(e),[r,i]=[n[0],n[n.length-1]],a=i-r,o=a===0?`no change`:`${a>0?`+`:``}${a} ${t}`;return`
    <p class="progress-summary">
      <strong>${r} → ${i} ${t}</strong>
      <span class="${a>0?`gain`:`muted`}">${o} since ${K(e[0].date)}</span>
    </p>`}function ke(e,t,n){let r=W(e,t),i=r.length>=2?`${Oe(r)}${De(r)}`:`<p class="hint">Log this exercise in another session to see your trend.</p>`,a=[...r].reverse().map(e=>`
        <li class="session-row">
          <span class="session-date">${K(e.date)}</span>
          <span>${h(e.sets)}</span>
        </li>`).join(``);return`
    <button type="button" class="link-button back-link" data-action="back">‹ ${n}</button>
    <section class="card progress-detail ${we(t)}">
      <h2>${t}</h2>
      <p class="muted">${Y(r.length,`session`)}</p>
      ${i}
    </section>
    <section class="card">
      <h3 class="sessions-heading">Every session</h3>
      <ul class="session-list">${a||`<li class="muted">No sessions logged yet.</li>`}</ul>
    </section>
  `}var Ae=[`The only bad workout is the one that didn't happen.`,`You don't have to be extreme, just consistent.`,`Small progress is still progress.`,`Show up today. Future you is counting on it.`,`Discipline is doing it when you don't feel like it.`,`One more rep than last time. That's the whole game.`,`Strong is built one session at a time.`,`Motivation gets you started. Habit keeps you going.`,`The weight doesn't care about your excuses.`,`Earn the rest day.`,`Good form today, heavier weight tomorrow.`,`Compare yourself to who you were last month.`];function je(e){return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)%Ae.length}function Me(e){let{max:t}=U(e.reps);return t<=8?180:t<=12?120:90}function Ne(e){return`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`}var Pe=15e3;function Fe(e){let t=null,n=0,r,i=null;function a(){typeof AudioContext<`u`&&(i??=new AudioContext,i.resume())}function o(){if(navigator.vibrate?.([200,100,200]),i)for(let[e,t]of[[0,880],[.25,1175]]){let n=i.createOscillator(),r=i.createGain();n.frequency.value=t,r.gain.setValueAtTime(.3,i.currentTime+e),r.gain.exponentialRampToValueAtTime(.001,i.currentTime+e+.2),n.connect(r).connect(i.destination),n.start(i.currentTime+e),n.stop(i.currentTime+e+.2)}}function s(){window.clearInterval(r),t=null,e.hidden=!0,document.body.classList.remove(`resting`)}function c(){if(t===null)return;let i=Math.ceil((t-Date.now())/1e3);if(i>0){e.innerHTML=`
        <div class="rest-progress" style="width: ${Math.min(100,i/n*100)}%"></div>
        <span class="rest-label">Rest <strong class="rest-clock">${Ne(i)}</strong></span>
        <span class="rest-buttons">
          <button type="button" data-rest="add">+30s</button>
          <button type="button" data-rest="skip">Skip</button>
        </span>`;return}window.clearInterval(r),e.classList.add(`rest-done`),e.innerHTML=`
      <span class="rest-label"><strong>Time for your next set</strong></span>
      <span class="rest-buttons"><button type="button" data-rest="skip">OK</button></span>`,o();let a=t;window.setTimeout(()=>{t===a&&s()},Pe)}return document.addEventListener(`pointerup`,a,{once:!0}),e.addEventListener(`click`,e=>{let r=e.target.closest(`[data-rest]`);r&&t!==null&&(r.dataset.rest===`add`?(t+=3e4,n+=30,c()):s())}),{start(i){a(),window.clearInterval(r),t=Date.now()+i*1e3,n=i,e.hidden=!1,e.classList.remove(`rest-done`),document.body.classList.add(`resting`),c(),r=window.setInterval(c,250)}}}var Ie=[...Object.keys(r).flatMap(e=>r[e].map(t=>({day:n[e],slot:t}))),...i.map(e=>({day:`Abs`,slot:e}))],Le=e=>Ie.flatMap(({slot:e})=>e.options).filter(t=>t.equipment===e).length;function X(e,t){let n=t?`Last backup: ${K(t)}.`:`No backup yet.`;return`
    <section class="card backup">
      <h3>Backup</h3>
      <p class="hint">Your ${e} logged workout${e===1?` is`:`s are`} saved only on this device. ${n}</p>
      <div class="backup-buttons">
        <button type="button" class="secondary" data-action="export-backup" ${e===0?`disabled`:``}>Save a backup</button>
        <label class="button-like">
          Restore from backup
          <input type="file" accept=".json,application/json" data-restore hidden />
        </label>
      </div>
      <p class="hint small">Restoring adds the backup's workouts and skips ones already here, so nothing is erased.</p>
    </section>`}function Re(t){let n=Ie.filter(({slot:e})=>e.options.every(e=>t.has(e.equipment)));return`
    <h2 class="section-title">Equipment at the ARC</h2>
    <p class="hint">Untick anything the ARC doesn't have, and workouts won't suggest exercises that need it. The number is how many exercises use it. Changes save right away.</p>
    ${n.length>0?`<p class="finish-error" role="alert">Nothing left for: ${n.map(({day:e,slot:t})=>`${t.label} (${e})`).join(`, `)}. Those slots will still suggest an exercise.</p>`:``}
    ${e.map(e=>`
      <section class="card equipment-group">
        <h3>${e.label}</h3>
        ${Object.entries(e.items).map(([e,n])=>`
              <label class="check-row">
                <input type="checkbox" data-equipment="${e}" ${t.has(e)?``:`checked`} />
                <span class="check-label">${n}</span>
                <span class="muted">${Le(e)}</span>
              </label>`).join(``)}
      </section>`).join(``)}
  `}function ze(e,t,n,r){return`
    <div class="workout-header">
      <h2>Settings</h2>
      <button type="button" class="secondary" data-action="home">Done</button>
    </div>
    ${r}
    ${X(t,n)}
    ${Re(e)}
  `}function Be(e,t,n,r){let i=e.exercises.flatMap(e=>e.sets),a=i.reduce((e,t)=>e+(t.weight??0)*t.reps,0),o=n===void 0?null:Math.max(1,Math.round((r-n)/6e4)),s=[],c=!0;for(let n of e.exercises){let r=W(t,n.name);if(r.length===0)continue;c=!1;let[i]=W([{...e,exercises:[n]}],n.name),a=r.map(e=>e.topWeight).filter(e=>e!==null);if(i.topWeight!==null&&a.length>0){let e=Math.max(...a);i.topWeight>e&&s.push({name:n.name,value:i.topWeight,previous:e,unit:`lb`})}else if(i.topWeight===null){let e=Math.max(...r.map(e=>e.bestReps));i.bestReps>e&&s.push({name:n.name,value:i.bestReps,previous:e,unit:`reps`})}}return{sets:i.length,exercises:e.exercises.length,volume:a,minutes:o,bests:s,allFirstTimes:c}}function Z(e,t){return`<div class="stat"><strong>${e}</strong><span>${t}</span></div>`}function Ve(e){return e.bests.length>0?`
      <section class="card bests">
        <h3>🏆 New personal best${e.bests.length===1?``:`s`}</h3>
        <ul>
          ${e.bests.map(e=>`
                <li>
                  <span>${e.name}</span>
                  <strong>${e.value} ${e.unit}</strong>
                  <span class="muted">was ${e.previous}</span>
                </li>`).join(``)}
        </ul>
      </section>`:e.allFirstTimes||e.sets===0?``:`<p class="hint">No new bests today. Showing up is what builds them.</p>`}function He(e,t){let[r,i,a]=e.date.split(`-`).map(Number),o=new Date(r,i-1,a).toLocaleDateString(void 0,{weekday:`long`,month:`short`,day:`numeric`}),s=e.exercises.map(e=>`
        <li class="session-row">
          <span>${e.name}</span>
          <span class="muted">${h(e.sets)}</span>
        </li>`).join(``);return`
    <section class="card summary-card day-${e.day}">
      <p class="slot-label">Workout complete</p>
      <h2>${n[e.day]} day 💪</h2>
      <p class="muted">${o}</p>
      <div class="stat-grid">
        ${Z(String(t.sets),t.sets===1?`set`:`sets`)}
        ${Z(String(t.exercises),t.exercises===1?`exercise`:`exercises`)}
        ${Z(t.volume.toLocaleString(),`lb lifted`)}
        ${t.minutes===null?``:Z(String(t.minutes),t.minutes===1?`minute`:`minutes`)}
      </div>
    </section>
    ${Ve(t)}
    ${s?`<section class="card">
            <h3 class="sessions-heading">What you did</h3>
            <ul class="session-list">${s}</ul>
          </section>`:`<p class="hint">No sets were logged, but the day still counts on your calendar.</p>`}
    <button type="button" class="finish day-${e.day}" data-action="summary-done">Done</button>
    <button type="button" class="link-button undo-link" data-action="undo">Undo, I wasn't finished</button>
  `}var Ue=Object.keys(n),We=[`S`,`M`,`T`,`W`,`T`,`F`,`S`],Q=e=>`${e} set${e===1?``:`s`} logged`,$=e=>ee(e.day,e.abs);function Ge(e,t){return e.map(e=>c(e.weight)).filter(e=>e!==null).at(-1)??t}function Ke(e){if(e===null)return`<span class="muted">Type a weight to see which plates to load.</span>`;let t=H(e);if(t===null)return`<span class="muted">${e} lb is less than the 45-lb bar.</span>`;let n=t.total===e?``:` <span class="muted">(closest to ${e} you can load)</span>`,r=t.perSide.length===0?`<span class="muted">Just the empty bar</span>`:`Each side ${t.perSide.map(e=>`<span class="plate">${e}</span>`).join(``)}`;return`<span><strong>${t.total} lb</strong> on a 45-lb bar${n}</span><span class="plate-row">${r}</span>`}function qe(e,r=()=>new Date){let l=se(),v=`home`,y=null,b=null,x=null,S=fe(),C=null,w=null,T=null,E=`progress`,D=null,O=null,k=new Set(le()),A=null,j=oe(),M=null,N=je(r()),P={year:r().getFullYear(),month:r().getMonth()};e.innerHTML=`
    <header class="app-header">
      <div class="header-row">
        <button type="button" class="brand" data-action="home">
          <span class="brand-mark">PPL</span>
          <span class="brand-name">at the ARC</span>
        </button>
        <button type="button" class="secondary settings-button" data-action="settings">⚙ Settings</button>
      </div>
      <nav class="day-picker" aria-label="Start a workout">
        ${Ue.map(e=>`<button type="button" class="day-${e}" data-day="${e}">${n[e]}</button>`).join(``)}
      </nav>
    </header>
    <main id="view"></main>
    <div class="rest-timer" role="status" aria-live="polite" hidden></div>
    <div class="confirm-backdrop" hidden>
      <div class="confirm-sheet" role="alertdialog" aria-modal="true" aria-labelledby="confirm-message">
        <p id="confirm-message"></p>
        <div class="confirm-buttons">
          <button type="button" data-confirm="no">Cancel</button>
          <button type="button" class="confirm-yes" data-confirm="yes"></button>
        </div>
      </div>
    </div>
  `;let I=e.querySelector(`#view`),L=Fe(e.querySelector(`.rest-timer`));function z(){ce(l)||(A=`Your sets can't be saved on this device. Is this a private browsing window?`)}function B(e,t,n,r){e?C={message:t,confirmLabel:n,onConfirm:r}:r()}function V(e){let t=l?f(l.sets):0,r=l?n[l.day]:``;B(t>0,`Discard the ${Q(t)} for ${r} day?`,`Discard`,e)}let H=e=>t=>!k.has(t.equipment)&&!e.includes(t.equipment);function U(e,t=!1,n=[],i=r().getTime()){let a=ee(e,t),o=te(a,Math.random,H(n));l={day:e,abs:t,taken:n,startedAt:i,workout:o,sets:d(a,o)},z()}function W(e,n){let r=$(e)[n],{equipment:i}=r.options[e.workout[n]],a=e.taken.includes(i)?e.taken:[...e.taken,i],o=ne(r,e.workout[n],H(a));if(o===null){e.taken=a,z(),O={slot:n,text:`Nothing else for this is free. Wait for the ${t[i].toLowerCase()}, or tap Change.`};return}let s=f([e.sets[n]]);B(s>0,`Swap this exercise and discard its ${Q(s)}?`,`Swap`,()=>{e.taken=a,e.workout=re(e.workout,n,o),e.sets[n]=u($(e),n,o),z(),O={slot:n,text:`${t[i]} is taken, so here's ${r.options[o].name}.`}})}function G(e){let t=te(i,Math.random,H(e.taken));e.abs=!0,e.workout=[...e.workout,...t],e.sets=[...e.sets,...d(i,t)],z()}function q(e){let t=e.workout.length-i.length,n=f(e.sets.slice(t));B(n>0,`Remove the abs finisher and its ${Q(n)}?`,`Remove`,()=>{e.abs=!1,e.workout=e.workout.slice(0,t),e.sets=e.sets.slice(0,t),z()})}function J(){if(!M)return``;let e=M.undo?`<button type="button" class="link-button" data-action="undo">Undo</button>`:``;return`<div class="notice" role="status"><span>${M.message}</span>${e}</div>`}function we(){return l?`
      <button type="button" class="resume day-${l.day}" data-action="resume">
        <span>Continue ${n[l.day]} day</span>
        <span class="resume-detail">${Q(f(l.sets))} ›</span>
      </button>`:``}function Y(){let{year:e,month:t}=P,i=`${e}-${String(t+1).padStart(2,`0`)}-`,a=j.filter(e=>e.date.startsWith(i)),o=new Map;for(let e of a)o.set(e.date,[...o.get(e.date)??[],e.day]);let s=ae(r()),c=new Date(e,t,1).toLocaleDateString(void 0,{month:`long`,year:`numeric`}),l=Ue.map(e=>{let t=a.filter(t=>t.day===e).length;return`<span class="count-chip day-${e}">${n[e]} ${t}</span>`}).join(``),u=ve(e,t).map(e=>{if(e===null)return`<div class="cal-cell blank"></div>`;let t=`${i}${String(e).padStart(2,`0`)}`,r=o.get(t)??[],a=[`cal-cell`,r.length>0?`logged day-${r[0]}`:``,t===s?`today`:``],c=r.length>1?` style="background: linear-gradient(135deg, ${r.map((e,t)=>`var(--${e}) ${t*100/r.length}% ${(t+1)*100/r.length}%`).join(`, `)})"`:``,l=`<span class="cal-date">${e}</span>${r.map(e=>`<span class="cal-split">${n[e]}</span>`).join(``)}`;if(r.length===0)return`<div class="${a.join(` `)}">${l}</div>`;let u=`${e}: ${r.map(e=>n[e]).join(` and `)}. Tap to see or edit.`;return`<button type="button" class="${a.join(` `)}"${c} data-date="${t}" aria-label="${u}">${l}</button>`}).join(``),d=a.length===0?`<p class="hint">No workouts logged this month. Pick a split above, then tap <strong>Finish workout</strong>.</p>`:``;return`
      <section class="card calendar">
        <div class="cal-header">
          <button type="button" class="icon-button" data-action="prev-month" aria-label="Previous month">‹</button>
          <h2>${c}</h2>
          <button type="button" class="icon-button" data-action="next-month" aria-label="Next month">›</button>
        </div>
        <p class="cal-total"><strong>${a.length}</strong> workout${a.length===1?``:`s`} this month</p>
        <div class="count-chips">${l}</div>
        <div class="cal-grid">
          ${We.map(e=>`<div class="cal-weekday">${e}</div>`).join(``)}
          ${u}
        </div>
        ${d}
      </section>
    `}function De(){return`
      ${J()}
      ${we()}
      <section class="card quote-card">
        <p class="quote">“${Ae[N]}”</p>
        <button type="button" class="link-button" data-action="next-quote">Another one</button>
      </section>
      ${Y()}
      ${Te(j)}
    `}function Oe(e,t){return`
      <div class="options" role="group" aria-label="Choose an exercise">
        ${$(e)[t].options.map((n,r)=>{let i=e.workout[t]===r;if(k.has(n.equipment)&&!i)return``;let a=e.taken.includes(n.equipment)?`<span class="tag">Taken</span>`:``;return`
              <button type="button" class="option${i?` current`:``}" data-choose="${t}:${r}" aria-pressed="${i}">
                <span class="option-name">${n.name}${a}</span>
                <span class="option-detail">${n.targetMuscles.join(` · `)} · ${n.sets}×${n.reps}</span>
              </button>`}).join(``)}
      </div>
    `}function Ne(e,t){if(!t)return`<p class="weight">${a(e)}</p>`;let n={up:`⬆`,same:`＝`,down:`⬇`}[t.direction];return`<p class="advice advice-${t.direction}"><span class="advice-icon">${n}</span>${t.message}</p>`}function Pe(e,t,n,r,i){return`<div class="set-log">${r?`<p class="last-time">
          <span>Last time: <strong>${h(r.sets)}</strong></span>
          <button type="button" class="link-button" data-history="${e.name}">History</button>
        </p>`:`<p class="last-time">First time logging this one.</p>`}${n.map((n,a)=>{let o=i?.weight??r?.sets[a]?.weight??r?.sets.at(-1)?.weight,s=(e,r,i,o)=>`
          <label class="field">
            <input type="text" inputmode="${i}" autocomplete="off" data-set="${t}:${a}:${e}"
              value="${R(n[e])}" placeholder="${o}"
              aria-label="Set ${a+1} ${e===`weight`?`weight in pounds`:`reps`}" />
            <span>${r}</span>
          </label>`;return`
          <div class="${g(n)}">
            <span class="set-number">${a+1}</span>
            ${s(`weight`,`lb`,`decimal`,o==null?``:String(o))}
            ${s(`reps`,`reps`,`numeric`,e.reps)}
          </div>`}).join(``)}${Se.includes(e.equipment)?(()=>{let e=i?.weight??r?.sets.at(-1)?.weight??null;return`<p class="plate-helper" data-plates="${t}" data-fallback="${e??``}">
              ${Ke(Ge(n,e))}
            </p>`})():``}</div>`}function Ie(e){let r=$(e),a=r.length-i.length,s=ie(r,e.workout).map((n,i)=>{let s=de(j,n.name),c=s?Ce(n,s):null;return`${e.abs&&i===a?`
      <li class="section-heading">
        <h3>Abs finisher</h3>
        <button type="button" class="link-button" data-action="remove-abs">Remove</button>
      </li>`:``}
          <li class="card exercise-card">
            <div class="exercise-top">
              <span class="exercise-number">${i+1}</span>
              <div>
                <p class="slot-label">${r[i].label}</p>
                <h3>${n.name}</h3>
              </div>
            </div>
            <div class="muscle-chips">${n.targetMuscles.map(e=>`<span>${e}</span>`).join(``)}</div>
            <p class="sets">${n.sets} sets × ${n.reps} reps</p>
            ${Ne(n,c)}
            <ul class="cues">${n.cues.map(e=>`<li>${e}</li>`).join(``)}</ul>
            <div class="card-actions">
              <a href="${o(n)}" target="_blank" rel="noopener noreferrer">▶ Form video</a>
              <div class="card-buttons">
                <button type="button" data-taken="${i}" aria-label="${t[n.equipment]} is taken; swap exercise">Taken</button>
                <button type="button" data-toggle="${i}" aria-expanded="${D===i}">${D===i?`Close`:`Change`}</button>
              </div>
            </div>
            ${O?.slot===i?`<p class="slot-message" role="status">${O.text}</p>`:``}
            ${D===i?Oe(e,i):``}
            ${Pe(n,i,e.sets[i],s,c)}
          </li>`}).join(``),c=A?`<p class="finish-error" role="alert">${A}</p>`:``;return`
      <div class="workout-header">
        <h2>${n[e.day]} day <span class="muted">· ${r.length} exercises</span></h2>
        <button type="button" class="secondary" data-action="shuffle">Shuffle</button>
      </div>
      <ol class="exercise-list">${s}</ol>
      ${e.abs?``:`<button type="button" class="add-abs" data-action="add-abs">
              ＋ Add abs finisher <span class="muted">· ${i.length} exercises</span>
            </button>`}
      ${c}
      <button type="button" class="finish" data-action="finish">
        Finish workout <span class="finish-count">· ${Q(f(e.sets))}</span>
      </button>
    `}function Le(){let t=e.querySelector(`.confirm-backdrop`),n=t.hidden;t.hidden=C===null,C&&(t.querySelector(`#confirm-message`).textContent=C.message,t.querySelector(`.confirm-yes`).textContent=C.confirmLabel,n&&t.querySelector(`[data-confirm="no"]`).focus())}function X(){Le(),v===`workout`&&!l&&(v=`home`);let t=v===`workout`?l:null;e.dataset.split=t?.day??``,e.querySelectorAll(`[data-day]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e.dataset.day===t?.day))}),e.querySelector(`[data-action="settings"]`).setAttribute(`aria-pressed`,String(v===`settings`)),t?I.innerHTML=Ie(t):v===`summary`&&w?I.innerHTML=He(w.workout,w.stats):v===`settings`?I.innerHTML=ze(k,j.length,S,J()):v===`day`&&y?I.innerHTML=xe(j,y,b,x,J()):v===`progress`&&T?I.innerHTML=ke(j,T,E===`workout`?`Back to workout`:`All exercises`):v===`progress`?I.innerHTML=Ee(j):I.innerHTML=De()}function Re(e){if(_(e.sets)){A=`Some sets (in red) don't look right. Reps must be 1–100 and weight 0–2000 lb.`;return}let t=j,i={date:ae(r()),day:e.day,exercises:m($(e),e.workout,e.sets)};j=[...j,i],F(j)?(M={message:`${n[e.day]} day logged with ${Q(f(e.sets))}. Nice work!`,undo:{log:t,draft:e}},w={workout:i,stats:Be(i,t,e.startedAt,r().getTime())},l=null,z(),v=`summary`,P={year:r().getFullYear(),month:r().getMonth()}):(j=t,A=`Couldn't save your workout. Is this a private browsing window?`)}function Z(e,t){return F(e)?(M={message:t,undo:{log:j}},j=e,!0):(M={message:`Couldn't save the change. Is this a private browsing window?`},!1)}function Ve(e){if(_(e.inputs)){x=`Some sets (in red) don't look right. Reps must be 1–100 and weight 0–2000 lb.`;return}let t=j[e.index],r=t.exercises.map((t,n)=>({name:t.name,sets:p(e.inputs[n])})).filter(e=>e.sets.length>0);Z(j.map((t,n)=>n===e.index?{...t,exercises:r}:t),`${n[t.day]} day workout updated.`)&&(b=null)}function qe(e){let t=j[e];B(!0,`Delete the ${n[t.day]} day workout from ${K(t.date)}? Its sets will be removed from your history.`,`Delete`,()=>{Z(j.filter((t,n)=>n!==e),`${n[t.day]} day workout deleted.`),b=null})}function Je(e){let t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=e.name,n.click(),window.setTimeout(()=>URL.revokeObjectURL(t),1e3)}async function Ye(){let e=ae(r()),t=JSON.stringify(me(j,[...k],r()),null,2),n=new File([t],he(e),{type:`application/json`});try{(window.matchMedia?.(`(pointer: coarse)`)?.matches??!1)&&navigator.canShare?.({files:[n]})?await navigator.share({files:[n],title:`PPL backup`}):Je(n)}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;M={message:`Couldn't save the backup. Please try again.`},X();return}S=e,pe(e),M={message:`Backup saved with ${j.length} workout${j.length===1?``:`s`}. Keep the file somewhere safe.`},X()}async function Xe(e){let t=ge(await e.text());if(t===null)M={message:`That file isn't a PPL backup. Pick a file named like ppl-backup-2026-10-21.json.`};else{let{log:e,added:n}=_e(j,t.log);n===0?M={message:`Everything in that backup is already on this device.`}:Z(e,`Restored ${n} workout${n===1?``:`s`} from the backup.`),k.size===0&&t.missingEquipment.length>0&&(k=new Set(t.missingEquipment),ue([...k]))}X()}function Ze(e,t){switch(e){case`home`:v=`home`,T=null,b=null,M=null;break;case`edit-workout`:b={index:t,inputs:be(j[t])},x=null,M=null;break;case`cancel-edit`:b=null;break;case`save-edit`:b&&Ve(b);break;case`delete-workout`:qe(t);break;case`export-backup`:Ye();break;case`progress`:v=`progress`,T=null,M=null;break;case`back`:v=E,T=null;break;case`settings`:v=`settings`,M=null;break;case`resume`:v=`workout`,M=null;break;case`shuffle`:if(l){let{day:e,abs:t,taken:n,startedAt:r}=l;V(()=>U(e,t,n,r))}D=null;break;case`add-abs`:l&&G(l);break;case`remove-abs`:l&&q(l);break;case`finish`:l&&Re(l);break;case`summary-done`:v=`home`,w=null;break;case`undo`:M?.undo&&F(M.undo.log)&&(j=M.undo.log,M.undo.draft&&(l=M.undo.draft,z(),v=`workout`)),M=null,w=null;break;case`next-quote`:N=(N+1)%Ae.length;break;case`prev-month`:case`next-month`:P=ye(P.year,P.month,e===`prev-month`?-1:1)}}let Qe=()=>[v,v===`workout`?l?.day:``,y,T].join(`|`);function $e(e){Qe()!==e&&window.scrollTo({top:0})}function et(e){let t=e.closest(`[data-confirm]`)?.dataset.confirm;if(t===void 0&&e.closest(`.confirm-sheet`))return;let n=Qe(),r=t===`yes`?C?.onConfirm:void 0;C=null,r?.(),X(),$e(n)}e.addEventListener(`keydown`,e=>{e.key===`Escape`&&C&&(C=null,X())}),e.addEventListener(`click`,e=>{if(C){et(e.target);return}let t=e.target.closest(`button`);if(!t)return;let n=Qe(),{day:r,action:i,toggle:a,choose:o,taken:s,history:c,date:d,index:f}=t.dataset;if(A=null,O=null,r){let e=r,t=()=>{l?.day!==e&&U(e),v=`workout`,D=null,M=null};l?.day===e?t():V(t)}else if(d)v=`day`,y=d,b=null,M=null;else if(c)E=v===`workout`?`workout`:`progress`,T=c,v=`progress`;else if(s!==void 0&&l)W(l,Number(s)),D=null;else if(a!==void 0)D=D===Number(a)?null:Number(a);else if(o!==void 0&&l){let[e,t]=o.split(`:`).map(Number);l.workout[e]!==t&&(l.workout=re(l.workout,e,t),l.sets[e]=u($(l),e,t),z()),D=null}else if(i)Ze(i,Number(f));else return;X(),$e(n)}),e.addEventListener(`change`,e=>{let t=e.target;if(!t.dataset.set||!l)return;let[n,,r]=t.dataset.set.split(`:`);if(r!==`reps`||s(t.value)===null)return;let i=ie($(l),l.workout)[Number(n)];L.start(Me(i))}),e.addEventListener(`change`,e=>{let t=e.target;t.dataset.restore!==void 0&&t.files?.[0]&&(Xe(t.files[0]),t.value=``)}),e.addEventListener(`change`,e=>{let t=e.target,n=t.dataset.equipment;n&&(t.checked?k.delete(n):k.add(n),ue([...k])||(k=new Set(le()),window.alert(`Couldn't save. Is this a private browsing window?`)),X())}),e.addEventListener(`input`,e=>{let t=e.target;if(!t.dataset.edit||!b)return;let[n,r,i]=t.dataset.edit.split(`:`),a=b.inputs[Number(n)][Number(r)];a[i]=t.value,t.closest(`.set-row`).className=g(a)}),e.addEventListener(`input`,t=>{let n=t.target;if(!n.dataset.set||!l)return;let[r,i,a]=n.dataset.set.split(`:`),o=l.sets[Number(r)][Number(i)];o[a]=n.value,z(),n.closest(`.set-row`).className=g(o);let s=e.querySelector(`[data-plates="${r}"]`);if(s&&a===`weight`){let e=c(s.dataset.fallback??``);s.innerHTML=Ke(Ge(l.sets[Number(r)],e))}e.querySelector(`.finish-count`).textContent=`· ${Q(f(l.sets))}`}),X()}qe(document.querySelector(`#app`)),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});