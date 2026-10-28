(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function t(e,t){try{return t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}var n={calories:2500,protein:150},r=`ppl-food-log`,i=`ppl-food-goals`,a=60,o=/^\d{4}-\d{2}-\d{2}$/;function s(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n}function c(e){if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.id==`string`&&typeof t.date==`string`&&o.test(t.date)&&typeof t.name==`string`&&t.name.length>0&&t.name.length<=a&&s(t.calories,0,5e3)&&s(t.protein,0,500)}var l=e=>Array.isArray(e)?e.filter(c):[];function u(e){if(typeof e!=`object`||!e)return null;let{calories:t,protein:n}=e;return s(t,500,1e4)&&s(n,0,500)?{calories:t,protein:n}:null}var d=()=>l(e(r)),f=e=>t(r,e),ee=()=>u(e(i))??n,p=e=>t(i,e);function m(){return globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`}function te(e){let t=e.name.trim();if(t===``)return{error:`Give the food a name, like "Chicken bowl".`};if(t.length>a)return{error:`Keep the name under ${a} characters.`};let n=Number(e.calories.trim());if(e.calories.trim()===``||!Number.isInteger(n)||n<0||n>5e3)return{error:`Calories must be a whole number from 0 to 5000.`};let r=e.protein.trim()===``?0:Number(e.protein.trim());return s(r,0,500)?{name:t,calories:n,protein:Math.round(r*10)/10}:{error:`Protein must be a number of grams from 0 to 500.`}}function h(e,t){let n=u({calories:Number(e.trim()),protein:Number(t.trim())});return e.trim()===``||t.trim()===``||n===null?{error:`Goals must be 500–10000 calories and 0–500 g protein.`}:n}function g(e,t){let n=e.filter(e=>e.date===t);return{calories:n.reduce((e,t)=>e+t.calories,0),protein:Math.round(n.reduce((e,t)=>e+t.protein,0)*10)/10}}function ne(e,t=6){let n=new Set,r=[];for(let i of[...e].reverse().sort((e,t)=>t.date.localeCompare(e.date))){let e=i.name.toLowerCase();if(!n.has(e)&&(n.add(e),r.push({name:i.name,calories:i.calories,protein:i.protein}),r.length===t))break}return r}function re(e,t){let n=new Set(e.map(e=>e.id)),r=t.filter(e=>!n.has(e.id));return{entries:[...e,...r],added:r.length}}var _=[{label:`Free weights & benches`,items:{dumbbells:`Dumbbells`,barbell:`Barbell & plates`,"ez-bar":`EZ curl bar`,"bench-press":`Bench press station`,"squat-rack":`Squat rack`,"decline-bench":`Decline sit-up bench`,"pull-up-bar":`Pull-up bar / captain's chair`,"ab-wheel":`Ab wheel`}},{label:`Cables`,items:{cable:`Cable station`,"lat-pulldown":`Lat pulldown`,"cable-row":`Seated cable row`}},{label:`Machines`,items:{"smith-machine":`Smith machine`,"chest-press-machine":`Chest press machine`,"incline-press-machine":`Incline press machine`,"shoulder-press-machine":`Shoulder press machine`,"lateral-raise-machine":`Lateral raise machine`,"pec-deck":`Pec deck / rear delt machine`,"assisted-pull-up":`Assisted pull-up machine`,"t-bar-row":`T-bar row`,"preacher-curl-machine":`Preacher curl machine`,"hack-squat":`Hack squat`,"leg-press":`Leg press`,"leg-extension":`Leg extension`,"seated-leg-curl":`Seated leg curl`,"lying-leg-curl":`Lying leg curl`,"standing-calf-raise":`Standing calf raise machine`,"seated-calf-raise":`Seated calf raise machine`}}],ie=Object.fromEntries(_.flatMap(e=>Object.entries(e.items))),v={push:`Push`,pull:`Pull`,legs:`Legs`},y={push:[{label:`Chest press`,options:[{name:`Barbell Bench Press`,equipment:`bench-press`,targetMuscles:[`Chest`,`Front delts`,`Triceps`],sets:4,reps:`6–8`,cues:[`Shoulder blades squeezed back and down`,`Lower the bar to mid-chest, elbows about 45° from your body`,`Feet planted, press the bar up and slightly back`]},{name:`Dumbbell Bench Press`,equipment:`dumbbells`,targetMuscles:[`Chest`,`Front delts`,`Triceps`],sets:4,reps:`8–10`,cues:[`Kick the dumbbells up from your knees as you lie back`,`Lower until you feel a stretch across your chest`,`Press up and slightly together without clanking the weights`]},{name:`Machine Chest Press`,equipment:`chest-press-machine`,targetMuscles:[`Chest`,`Front delts`,`Triceps`],sets:3,reps:`8–12`,cues:[`Set the seat so the handles line up with mid-chest`,`Keep your back against the pad the whole time`,`Control the weight back; don't let the stack touch down`]}]},{label:`Upper chest`,options:[{name:`Incline Dumbbell Press`,equipment:`dumbbells`,targetMuscles:[`Upper chest`,`Front delts`,`Triceps`],sets:3,reps:`8–10`,cues:[`Bench at about 30°, not steeper`,`Lower the dumbbells to the sides of your upper chest`,`Keep your wrists stacked over your elbows`]},{name:`Incline Smith Machine Press`,equipment:`smith-machine`,targetMuscles:[`Upper chest`,`Front delts`,`Triceps`],sets:3,reps:`8–10`,cues:[`Position the bench so the bar touches your upper chest`,`Shoulder blades pinned back`,`Use the safety hooks; twist to rack`]},{name:`Incline Machine Press`,equipment:`incline-press-machine`,targetMuscles:[`Upper chest`,`Front delts`,`Triceps`],sets:3,reps:`10–12`,cues:[`Handles start just above chest height`,`Chest up, back flat on the pad`,`Slow 2–3 second lowering`]}]},{label:`Shoulder press`,options:[{name:`Seated Dumbbell Shoulder Press`,equipment:`dumbbells`,targetMuscles:[`Front delts`,`Side delts`,`Triceps`],sets:3,reps:`8–10`,cues:[`Bench upright, back against the pad`,`Lower until the dumbbells are about ear height`,`Don't arch your lower back to finish the rep`]},{name:`Machine Shoulder Press`,equipment:`shoulder-press-machine`,targetMuscles:[`Front delts`,`Side delts`,`Triceps`],sets:3,reps:`10–12`,cues:[`Handles start around shoulder height`,`Press straight up without locking out hard`,`Keep your head neutral against the pad`]},{name:`Arnold Press`,equipment:`dumbbells`,targetMuscles:[`Front delts`,`Side delts`,`Triceps`],sets:3,reps:`8–12`,cues:[`Start with palms facing you at chin height`,`Rotate palms forward as you press up`,`Reverse the rotation on the way down`]}]},{label:`Side delts`,options:[{name:`Dumbbell Lateral Raise`,equipment:`dumbbells`,targetMuscles:[`Side delts`],sets:3,reps:`12–15`,cues:[`Slight bend in the elbows, lean a little forward`,`Raise out to the sides until arms are about parallel to the floor`,`Lead with your elbows; no swinging`]},{name:`Cable Lateral Raise`,equipment:`cable`,targetMuscles:[`Side delts`],sets:3,reps:`12–15`,cues:[`Set the pulley at the lowest position, one arm at a time`,`Cable runs in front of your body`,`Raise to shoulder height and lower slowly`]},{name:`Machine Lateral Raise`,equipment:`lateral-raise-machine`,targetMuscles:[`Side delts`],sets:3,reps:`12–15`,cues:[`Shoulders line up with the machine's pivot`,`Push with your elbows against the pads`,`Pause briefly at the top`]}]},{label:`Triceps`,options:[{name:`Cable Triceps Pushdown`,equipment:`cable`,targetMuscles:[`Triceps`],sets:3,reps:`10–12`,cues:[`Elbows pinned to your sides`,`Push down until your arms are straight, then squeeze`,`Only your forearms move`]},{name:`Overhead Cable Triceps Extension`,equipment:`cable`,targetMuscles:[`Triceps (long head)`],sets:3,reps:`10–12`,cues:[`Face away from the cable, rope behind your head`,`Elbows point forward and stay still`,`Get a deep stretch at the bottom`]},{name:`EZ-Bar Skull Crusher`,equipment:`ez-bar`,targetMuscles:[`Triceps`],sets:3,reps:`8–12`,cues:[`Lower the bar to just behind your forehead`,`Upper arms stay angled slightly back`,`Start light; this is hard on the elbows if rushed`]}]},{label:`Chest fly`,options:[{name:`Cable Fly`,equipment:`cable`,targetMuscles:[`Chest`],sets:3,reps:`12–15`,cues:[`Pulleys at about shoulder height, staggered stance`,`Keep a soft bend in the elbows`,`Bring your hands together in front of your chest in a hugging motion`]},{name:`Pec Deck`,equipment:`pec-deck`,targetMuscles:[`Chest`],sets:3,reps:`12–15`,cues:[`Handles at chest height`,`Chest up, shoulders down`,`Squeeze for a second when the handles meet`]},{name:`Dumbbell Fly`,equipment:`dumbbells`,targetMuscles:[`Chest`],sets:3,reps:`10–12`,cues:[`Slight bend in the elbows that doesn't change`,`Lower out wide until you feel a chest stretch`,`Go lighter than you think`]}]}],pull:[{label:`Vertical pull`,options:[{name:`Lat Pulldown`,equipment:`lat-pulldown`,targetMuscles:[`Lats`,`Biceps`,`Rear delts`],sets:4,reps:`8–10`,cues:[`Thighs locked under the pad, slight lean back`,`Pull the bar to your upper chest, elbows down and back`,`Let your arms fully straighten at the top`]},{name:`Pull-Up`,equipment:`pull-up-bar`,load:`bodyweight`,targetMuscles:[`Lats`,`Biceps`,`Rear delts`],sets:4,reps:`6–10`,cues:[`Start from a dead hang, shoulders pulled down`,`Pull your chest toward the bar`,`No kipping; lower under control`]},{name:`Assisted Pull-Up Machine`,equipment:`assisted-pull-up`,load:`assisted`,targetMuscles:[`Lats`,`Biceps`,`Rear delts`],sets:3,reps:`8–12`,cues:[`More counterweight = easier`,`Pull until your chin clears the handles`,`Full stretch at the bottom of each rep`]}]},{label:`Row`,options:[{name:`Seated Cable Row`,equipment:`cable-row`,targetMuscles:[`Mid back`,`Lats`,`Biceps`],sets:4,reps:`8–12`,cues:[`Sit tall; don't rock your torso back and forth`,`Pull the handle to your stomach`,`Squeeze your shoulder blades together at the end`]},{name:`Chest-Supported Dumbbell Row`,equipment:`dumbbells`,targetMuscles:[`Mid back`,`Lats`,`Rear delts`],sets:3,reps:`8–12`,cues:[`Chest on an incline bench, dumbbells hanging`,`Drive your elbows back toward your hips`,`Chest stays on the pad`]},{name:`Barbell Row`,equipment:`barbell`,targetMuscles:[`Mid back`,`Lats`,`Lower back`],sets:3,reps:`6–10`,cues:[`Hinge until your torso is about 45°, back flat`,`Pull the bar to your lower ribs`,`If your back rounds, the weight is too heavy`]},{name:`T-Bar Row`,equipment:`t-bar-row`,targetMuscles:[`Mid back`,`Lats`],sets:3,reps:`8–10`,cues:[`Chest on the pad if the machine has one`,`Pull with your elbows, not your hands`,`Pause with the weight close to your chest`]}]},{label:`Lat isolation`,options:[{name:`Straight-Arm Cable Pulldown`,equipment:`cable`,targetMuscles:[`Lats`],sets:3,reps:`12–15`,cues:[`Arms nearly straight, slight hip hinge`,`Sweep the bar or rope down to your thighs`,`Feel it in your lats, not your triceps`]},{name:`Single-Arm Cable Row`,equipment:`cable`,targetMuscles:[`Lats`,`Mid back`],sets:3,reps:`10–12`,cues:[`Let your shoulder stretch forward at the start`,`Pull your elbow back past your torso`,`Keep your hips square`]},{name:`Single-Arm Dumbbell Row`,equipment:`dumbbells`,targetMuscles:[`Lats`,`Mid back`],sets:3,reps:`8–12`,cues:[`One knee and hand on the bench, back flat`,`Row the dumbbell toward your hip`,`Don't twist your torso to lift it`]}]},{label:`Rear delts`,options:[{name:`Face Pull`,equipment:`cable`,targetMuscles:[`Rear delts`,`Upper back`],sets:3,reps:`12–15`,cues:[`Rope at upper-chest to face height`,`Pull toward your forehead, hands apart`,`Finish with your hands beside your ears`]},{name:`Reverse Pec Deck`,equipment:`pec-deck`,targetMuscles:[`Rear delts`,`Upper back`],sets:3,reps:`12–15`,cues:[`Face the pad, handles at shoulder height`,`Sweep your arms back in a wide arc`,`Don't shrug your shoulders up`]},{name:`Bent-Over Dumbbell Rear Delt Fly`,equipment:`dumbbells`,targetMuscles:[`Rear delts`],sets:3,reps:`12–15`,cues:[`Hinge forward, back flat`,`Raise the dumbbells out to the sides with a soft elbow bend`,`Light weight, slow reps`]}]},{label:`Biceps`,options:[{name:`Dumbbell Curl`,equipment:`dumbbells`,targetMuscles:[`Biceps`],sets:3,reps:`10–12`,cues:[`Elbows stay by your sides`,`Turn your palms up as you curl`,`Lower slowly; no swinging`]},{name:`Incline Dumbbell Curl`,equipment:`dumbbells`,targetMuscles:[`Biceps (long head)`],sets:3,reps:`10–12`,cues:[`Bench at about 45°, arms hanging straight down`,`Curl without moving your upper arms forward`,`Full stretch at the bottom`]},{name:`EZ-Bar Curl`,equipment:`ez-bar`,targetMuscles:[`Biceps`],sets:3,reps:`8–12`,cues:[`Grip on the angled part of the bar`,`Stand tall; don't lean back to lift it`,`Squeeze at the top`]},{name:`Preacher Curl Machine`,equipment:`preacher-curl-machine`,targetMuscles:[`Biceps`],sets:3,reps:`10–12`,cues:[`Armpits snug against the top of the pad`,`Don't let the weight drop at the bottom`,`Stop just short of locking your elbows`]}]},{label:`Forearms & brachialis`,options:[{name:`Hammer Curl`,equipment:`dumbbells`,targetMuscles:[`Brachialis`,`Forearms`],sets:3,reps:`10–12`,cues:[`Palms face each other the whole time`,`Curl straight up, elbows still`,`Alternate arms or do both together`]},{name:`Cable Rope Hammer Curl`,equipment:`cable`,targetMuscles:[`Brachialis`,`Forearms`],sets:3,reps:`12–15`,cues:[`Rope on the low pulley`,`Thumbs up, elbows by your sides`,`Constant tension; don't rest at the bottom`]},{name:`Reverse-Grip EZ-Bar Curl`,equipment:`ez-bar`,targetMuscles:[`Forearms`,`Brachialis`],sets:3,reps:`10–12`,cues:[`Palms facing down`,`Wrists stay straight`,`Lighter than your regular curl`]}]}],legs:[{label:`Squat`,options:[{name:`Barbell Back Squat`,equipment:`squat-rack`,weightStep:10,targetMuscles:[`Quads`,`Glutes`,`Adductors`],sets:4,reps:`5–8`,cues:[`Bar on your upper back, brace your core before each rep`,`Knees track over your toes`,`Go as deep as you can with a flat back`]},{name:`Hack Squat`,equipment:`hack-squat`,weightStep:10,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`8–10`,cues:[`Feet shoulder-width, middle of the platform`,`Lower until your thighs are at least parallel`,`Back stays flat against the pad`]},{name:`Leg Press`,equipment:`leg-press`,weightStep:10,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`10–12`,cues:[`Lower back stays on the seat; don't let it curl up`,`Lower until your knees are near your chest`,`Don't lock your knees at the top`]},{name:`Goblet Squat`,equipment:`dumbbells`,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`10–12`,cues:[`Hold a dumbbell at your chest`,`Sit down between your heels, chest up`,`Elbows go inside your knees at the bottom`]}]},{label:`Hip hinge`,options:[{name:`Romanian Deadlift`,equipment:`barbell`,weightStep:10,targetMuscles:[`Hamstrings`,`Glutes`,`Lower back`],sets:3,reps:`8–10`,cues:[`Soft knees, push your hips straight back`,`Bar slides down your thighs, back flat`,`Stop when your hamstrings are fully stretched`]},{name:`Dumbbell Romanian Deadlift`,equipment:`dumbbells`,targetMuscles:[`Hamstrings`,`Glutes`],sets:3,reps:`10–12`,cues:[`Dumbbells close to your legs`,`Hips back, not down`,`Squeeze your glutes to stand up`]},{name:`Barbell Hip Thrust`,equipment:`barbell`,weightStep:10,targetMuscles:[`Glutes`,`Hamstrings`],sets:3,reps:`8–12`,cues:[`Upper back on a bench, bar padded over your hips`,`Drive through your heels until your hips are level`,`Chin tucked; don't arch your lower back`]}]},{label:`Single-leg / quads`,options:[{name:`Bulgarian Split Squat`,equipment:`dumbbells`,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`8–10 each leg`,cues:[`Back foot on a bench, front foot far enough forward`,`Drop your back knee straight down`,`Most of your weight stays on the front leg`]},{name:`Walking Lunge`,equipment:`dumbbells`,targetMuscles:[`Quads`,`Glutes`],sets:3,reps:`10 each leg`,cues:[`Long steps, torso upright`,`Back knee lowers close to the floor`,`Push through your front heel`]},{name:`Leg Extension`,equipment:`leg-extension`,targetMuscles:[`Quads`],sets:3,reps:`12–15`,cues:[`Knees line up with the machine's pivot`,`Kick up until your legs are straight, squeeze`,`Lower slowly`]}]},{label:`Hamstring curl`,options:[{name:`Seated Leg Curl`,equipment:`seated-leg-curl`,targetMuscles:[`Hamstrings`],sets:3,reps:`10–12`,cues:[`Lock the thigh pad down tight`,`Curl your heels under the seat`,`Lean your torso forward slightly for more stretch`]},{name:`Lying Leg Curl`,equipment:`lying-leg-curl`,targetMuscles:[`Hamstrings`],sets:3,reps:`10–12`,cues:[`Hips pressed into the pad`,`Curl the pad toward your glutes`,`Don't let the weight slam down`]},{name:`Single-Leg Cable Curl`,equipment:`cable`,targetMuscles:[`Hamstrings`],sets:3,reps:`12 each leg`,cues:[`Ankle strap on the low pulley, face the machine`,`Curl your heel toward your glute`,`Keep your hips still`]}]},{label:`Calves`,options:[{name:`Standing Calf Raise`,equipment:`standing-calf-raise`,targetMuscles:[`Calves`],sets:4,reps:`10–15`,cues:[`Balls of your feet on the edge`,`Pause at the bottom in a full stretch`,`Rise as high as you can on your toes`]},{name:`Seated Calf Raise`,equipment:`seated-calf-raise`,targetMuscles:[`Calves (soleus)`],sets:4,reps:`12–15`,cues:[`Pad snug on your lower thighs`,`Full stretch at the bottom, pause`,`Slow, controlled reps`]},{name:`Leg Press Calf Raise`,equipment:`leg-press`,targetMuscles:[`Calves`],sets:4,reps:`12–15`,cues:[`Only the balls of your feet on the platform`,`Keep your knees straight but not locked`,`Keep the safety handles in reach`]}]}]},b=[{label:`Abs`,options:[{name:`Cable Crunch`,equipment:`cable`,targetMuscles:[`Abs`],sets:3,reps:`12–15`,cues:[`Kneel facing the cable, rope beside your head`,`Curl your ribs toward your hips; your hips stay still`,`Pull with your abs, not your arms`]},{name:`Hanging Knee Raise`,equipment:`pull-up-bar`,load:`bodyweight`,targetMuscles:[`Abs`,`Hip flexors`],sets:3,reps:`10–15`,cues:[`Hang from the bar, or use the captain's chair`,`Bring your knees toward your chest and tilt your pelvis up`,`No swinging; lower slowly`]},{name:`Ab Wheel Rollout`,equipment:`ab-wheel`,load:`bodyweight`,targetMuscles:[`Abs`,`Core`],sets:3,reps:`8–12`,cues:[`Start on your knees, wheel under your shoulders`,`Roll out only as far as you can keep your lower back flat`,`Pull back with your abs, not your hips`]},{name:`Decline Sit-Up`,equipment:`decline-bench`,load:`bodyweight`,targetMuscles:[`Abs`,`Hip flexors`],sets:3,reps:`10–15`,cues:[`Feet hooked under the pads`,`Curl up one vertebra at a time`,`Hold a plate on your chest once it gets easy`]}]},{label:`Obliques & core`,options:[{name:`Cable Woodchop`,equipment:`cable`,targetMuscles:[`Obliques`,`Core`],sets:3,reps:`10–12 each side`,cues:[`Pulley high, pull diagonally down across your body`,`Turn through your torso and pivot your back foot`,`Arms stay mostly straight`]},{name:`Pallof Press`,equipment:`cable`,targetMuscles:[`Obliques`,`Core`],sets:3,reps:`10–12 each side`,cues:[`Stand side-on to the cable, handle at your chest`,`Press straight out and don't let it twist you`,`Hold for a second with your arms straight`]},{name:`Hanging Oblique Knee Raise`,equipment:`pull-up-bar`,load:`bodyweight`,targetMuscles:[`Obliques`,`Abs`],sets:3,reps:`8–12 each side`,cues:[`Hang from the bar`,`Raise your knees up and toward one side`,`Alternate sides, no swinging`]}]}];function ae(e){switch(e.load){case`bodyweight`:return`Bodyweight. Once you hit ${e.reps} reps on every set, slow the reps down or add weight.`;case`assisted`:return`Set the counterweight so you can do ${e.reps} reps with about 2 left. Less counterweight = harder.`;default:return`Pick a weight you can do for ${e.reps} reps with about 2 reps left in the tank. If the last set feels easy, go up next time.`}}function oe(e){return`https://www.youtube.com/results?search_query=${encodeURIComponent(`${e.name} proper form`)}`}function x(e){let t=Number(e.trim());return e.trim()!==``&&Number.isInteger(t)&&t>=1&&t<=100?t:null}function se(e){let t=Number(e.trim());return e.trim()!==``&&Number.isFinite(t)&&t>=0&&t<=2e3?t:null}function S(e,t){return t.trim()!==``&&(e===`reps`?x(t):se(t))===null}function ce(e,t,n){let{sets:r}=e[t].options[n];return Array.from({length:r},()=>({weight:``,reps:``}))}function le(e,t){return t.map((t,n)=>ce(e,n,t))}function C(e){return e.flat().filter(e=>x(e.reps)!==null).length}function ue(e){return e.flatMap(e=>{let t=x(e.reps);return t===null?[]:[{weight:se(e.weight),reps:t}]})}function de(e,t,n){return e.map((e,r)=>({name:e.options[t[r]].name,sets:ue(n[r])})).filter(e=>e.sets.length>0)}function fe(e){let t=e.map(e=>e.reps).join(` · `),n=new Set(e.map(e=>e.weight));if(n.size===1){let[e]=n;return e===null?`${t} reps`:`${e} lb × ${t}`}return e.map(e=>e.weight===null?`${e.reps}`:`${e.weight}×${e.reps}`).join(` · `)}function pe(e){let t=S(`weight`,e.weight)||S(`reps`,e.reps);return[`set-row`,x(e.reps)===null?``:`done`,t?`invalid`:``].join(` `)}var me=e=>e.flat().some(e=>S(`weight`,e.weight)||S(`reps`,e.reps)),w=()=>!0;function he(e,t){return t?[...y[e],...b]:y[e]}function T(e,t){return e.options.flatMap((e,n)=>t(e)?[n]:[])}function ge(e,t=Math.random,n=w){return e.map(e=>{let r=T(e,n),i=r.length>0?r:e.options.map((e,t)=>t);return i[Math.floor(t()*i.length)]})}function _e(e,t,n,r=Math.random){let i=T(e,n).filter(e=>e!==t);return i.length>0?i[Math.floor(r()*i.length)]:null}function ve(e,t,n){return e.map((e,r)=>r===t?n:e)}function ye(e,t){return e.map((e,n)=>e.options[t[n]])}var E=`ppl-workout-log`,D=`ppl-workout-draft`,O=`ppl-missing-equipment`,k=/^\d{4}-\d{2}-\d{2}$/;function A(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}var j=e=>typeof e==`object`&&!!e,M=e=>typeof e==`string`&&e in v,N=e=>typeof e==`string`&&e in ie;function P(e){if(!j(e))return!1;let{weight:t,reps:n}=e;return(t===null||typeof t==`number`&&t>=0&&t<=2e3)&&Number.isInteger(n)&&n>=1&&n<=100}function F(e){return j(e)&&typeof e.name==`string`&&Array.isArray(e.sets)&&e.sets.every(P)}function be(e){if(!j(e)||typeof e.date!=`string`||!k.test(e.date)||!M(e.day))return null;let t=Array.isArray(e.exercises)?e.exercises.filter(F):[];return{date:e.date,day:e.day,exercises:t}}function I(e){if(!j(e)||!M(e.day)||!Array.isArray(e.workout)||!Array.isArray(e.sets)||typeof e.abs!=`boolean`||!Array.isArray(e.taken)||!e.taken.every(N)||e.startedAt!==void 0&&typeof e.startedAt!=`number`)return!1;let t=he(e.day,e.abs),n=e.sets;return e.workout.length===t.length&&n.length===t.length&&e.workout.every((e,n)=>Number.isInteger(e)&&e>=0&&e<t[n].options.length)&&n.every(e=>Array.isArray(e)&&e.every(e=>j(e)&&typeof e.weight==`string`&&typeof e.reps==`string`))}function L(e){return Array.isArray(e)?e.map(be).filter(e=>e!==null):[]}function xe(e){return Array.isArray(e)?e.filter(N):[]}var Se=()=>L(e(E)),Ce=e=>t(E,e);function we(){let t=e(D);return j(t)&&(t.abs??=!1,t.taken??=[]),I(t)?t:null}var Te=e=>t(D,e),Ee=()=>xe(e(O)),De=e=>t(O,e);function Oe(e,t){return[...e].reverse().sort((e,t)=>t.date.localeCompare(e.date)).flatMap(e=>e.exercises).find(e=>e.name===t)}var R=`ppl-last-backup`;function ke(){let t=e(R);return typeof t==`string`&&k.test(t)?t:null}var Ae=e=>t(R,e),z=`ppl-at-the-arc`;function je(e,t,n,r=[],i=null){let a={app:z,version:1,exportedAt:n.toISOString(),log:e,missingEquipment:t,food:r};return i&&(a.goals=i),a}function Me(e){return`ppl-backup-${e}.json`}function Ne(e){let t;try{t=JSON.parse(e)}catch{return null}if(typeof t!=`object`||!t||t.app!==z)return null;let{log:n,missingEquipment:r,food:i,goals:a}=t;return{log:L(n),missingEquipment:xe(r),food:l(i),goals:u(a)}}function Pe(e,t){let n=new Set(e.map(e=>JSON.stringify(e))),r=t.filter(e=>{let t=JSON.stringify(e);return!n.has(t)&&(n.add(t),!0)});return{log:[...e,...r].sort((e,t)=>e.date.localeCompare(t.date)),added:r.length}}var Fe=e=>{if(`ellipse`in e){let[t,n,r,i]=e.ellipse;return t===50?[e]:[e,{...e,ellipse:[100-t,n,r,i]}]}let t=e.points.split(` `).map(e=>{let[t,n]=e.split(`,`).map(Number);return`${100-t},${n}`}).join(` `);return[e,{...e,points:t}]},Ie=[{ellipse:[50,16,11,12]},{points:`44,26 56,26 57,36 43,36`},{points:`29,36 71,36 68,108 32,108`},{ellipse:[21,66,7,16]},{ellipse:[17,94,6,15]},{points:`32,104 50,104 49,176 34,176`},{ellipse:[41,196,7,20]}],Le=[{region:`chest`,points:`32,40 49,40 49,58 34,56`},{region:`front-delts`,ellipse:[27,43,7,8]},{region:`side-delts`,ellipse:[20,45,4,8]},{region:`biceps`,ellipse:[21,66,5,13]},{region:`forearms`,ellipse:[17,94,5,13]},{region:`abs`,points:`42,62 58,62 57,100 43,100`},{region:`obliques`,points:`33,62 41,62 42,100 35,100`},{region:`hip-flexors`,ellipse:[42,111,6,5]},{region:`quads`,points:`33,118 47,118 47,170 36,170`},{region:`adductors`,points:`47,112 50,112 50,150 47,150`}],Re=[{region:`upper-back`,points:`40,36 60,36 58,64 42,64`},{region:`rear-delts`,ellipse:[27,43,7,8]},{region:`side-delts`,ellipse:[20,45,4,8]},{region:`lats`,points:`31,48 41,60 43,90 35,84`},{region:`lower-back`,points:`43,80 57,80 57,102 43,102`},{region:`triceps`,ellipse:[21,66,5,13]},{region:`forearms`,ellipse:[17,94,5,13]},{region:`glutes`,ellipse:[41,116,9,10]},{region:`hamstrings`,points:`34,128 48,128 48,172 36,172`},{region:`calves`,ellipse:[41,192,6,13]}];function ze(e,t){let n=e.region?t.has(e.region)?`muscle hit`:`muscle`:`body`;if(`ellipse`in e){let[t,r,i,a]=e.ellipse;return`<ellipse class="${n}" cx="${t}" cy="${r}" rx="${i}" ry="${a}" />`}return`<polygon class="${n}" points="${e.points}" />`}function Be(e,t,n){return`
    <figure class="body-figure">
      <svg viewBox="0 0 100 220" aria-hidden="true">${[...Ie,...t].flatMap(Fe).map(e=>ze(e,n)).join(``)}</svg>
      <figcaption>${e}</figcaption>
    </figure>`}function Ve(e){return`<div class="body-diagram">${Be(`Front`,Le,e)}${Be(`Back`,Re,e)}</div>`}function He(e,t){let n=new Date(e,t,1).getDay(),r=new Date(e,t+1,0).getDate();return[...Array(n).fill(null),...Array.from({length:r},(e,t)=>t+1)]}function Ue(e,t,n){let r=new Date(e,t+n,1);return{year:r.getFullYear(),month:r.getMonth()}}function B(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`)}function We(e){return e.exercises.map(e=>e.sets.map(e=>({weight:e.weight===null?``:String(e.weight),reps:String(e.reps)})))}function Ge(e,t,n){return`
    ${e.exercises.map((e,n)=>`
        <div class="edit-exercise">
          <h4>${e.name}</h4>
          ${t.inputs[n].map((t,r)=>`
                <div class="${pe(t)}">
                  <span class="set-number">${r+1}</span>
                  <label class="field">
                    <input type="text" inputmode="decimal" autocomplete="off" data-edit="${n}:${r}:weight"
                      value="${B(t.weight)}" aria-label="${e.name} set ${r+1} weight in pounds" />
                    <span>lb</span>
                  </label>
                  <label class="field">
                    <input type="text" inputmode="numeric" autocomplete="off" data-edit="${n}:${r}:reps"
                      value="${B(t.reps)}" aria-label="${e.name} set ${r+1} reps" />
                    <span>reps</span>
                  </label>
                </div>`).join(``)}
        </div>`).join(``)||`<p class="hint">No sets were logged in this workout.</p>`}
    <p class="hint small">Clear a set's reps to remove that set.</p>
    ${n?`<p class="finish-error" role="alert">${n}</p>`:``}
    <div class="edit-buttons">
      <button type="button" class="secondary" data-action="cancel-edit">Cancel</button>
      <button type="button" class="finish" data-action="save-edit">Save changes</button>
    </div>`}function Ke(e,t,n,r){let i=n?.index===t,a=i?Ge(e,n,r):e.exercises.length>0?`<ul class="session-list">
          ${e.exercises.map(e=>`
                <li class="session-row">
                  <span>${e.name}</span>
                  <span class="muted">${fe(e.sets)}</span>
                </li>`).join(``)}
        </ul>`:`<p class="hint">No sets logged.</p>`,o=i?``:`<div class="card-buttons">
        <button type="button" data-action="edit-workout" data-index="${t}">Edit</button>
        <button type="button" class="danger" data-action="delete-workout" data-index="${t}">Delete</button>
      </div>`;return`
    <section class="card day-workout day-${e.day}">
      <div class="day-workout-header">
        <h3>${v[e.day]} day</h3>
        ${o}
      </div>
      ${a}
    </section>`}function qe(e,t,n,r,i){let[a,o,s]=t.split(`-`).map(Number);return`
    <h2 class="section-title">${new Date(a,o-1,s).toLocaleDateString(void 0,{weekday:`long`,month:`long`,day:`numeric`})}</h2>
    ${i}
    ${e.map((e,i)=>e.date===t?Ke(e,i,n,r):``).join(``)||`<p class="hint">No workouts on this day.</p>`}
  `}function Je(e,t){let[n,r,i]=e.split(`-`).map(Number),a=new Date(n,r-1,i).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`});return e===t?`Today, ${a}`:a}function Ye(e,t,n,r){let i=Math.min(100,Math.round(t/n*100)),a=Math.max(0,Math.round((n-t)*10)/10),o=t>=n?`Goal reached 🎉`:`${a.toLocaleString()} ${r} to go`;return`
    <div class="food-total">
      <div class="food-total-row">
        <span><strong>${t.toLocaleString()}</strong> / ${n.toLocaleString()} ${r}</span>
        <span class="muted">${o}</span>
      </div>
      <div class="food-bar" role="progressbar" aria-label="${e}" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${t}">
        <div style="width: ${i}%"></div>
      </div>
    </div>`}function Xe(e,t,n){let r=g(e,n);return`
    <button type="button" class="card progress-card" data-action="food">
      <span><strong>🍽 Today's food</strong>${r.calories===0&&r.protein===0?`<span class="muted">Log what you eat today</span>`:`<span class="muted">${r.calories.toLocaleString()} / ${t.calories.toLocaleString()} kcal · ${r.protein} / ${t.protein} g protein</span>`}</span>
      <span class="chevron">›</span>
    </button>`}function Ze(e,t,n,r,i,a,o){let s=g(e,n),c=e.filter(e=>e.date===n),l=ne(e),u=c.length===0?`<p class="hint">Nothing logged ${n===r?`today`:`this day`} yet.</p>`:`<ul class="food-list">
          ${c.map(e=>`
                <li>
                  <span class="food-name">${B(e.name)}</span>
                  <span class="muted">${e.calories} kcal · ${e.protein} g</span>
                  <button type="button" class="icon-button" data-food-delete="${e.id}" aria-label="Remove ${B(e.name)}">×</button>
                </li>`).join(``)}
        </ul>`,d=l.length===0?``:`<div class="quick-add">
          <p class="hint small">Tap to add again:</p>
          <div class="quick-chips">
            ${l.map((e,t)=>`
                  <button type="button" class="quick-chip" data-food-again="${t}">
                    ${B(e.name)} <span class="muted">${e.calories} kcal</span>
                  </button>`).join(``)}
          </div>
        </div>`;return`
    <div class="workout-header">
      <h2>Food</h2>
    </div>
    <div class="cal-header food-day">
      <button type="button" class="icon-button" data-action="food-prev-day" aria-label="Previous day">‹</button>
      <h3>${Je(n,r)}</h3>
      <button type="button" class="icon-button" data-action="food-next-day" aria-label="Next day" ${n>=r?`disabled`:``}>›</button>
    </div>
    ${o}
    <section class="card">
      ${Ye(`Calories`,s.calories,t.calories,`kcal`)}
      ${Ye(`Protein`,s.protein,t.protein,`g protein`)}
    </section>
    <section class="card">
      <h3 class="sessions-heading">Add food</h3>
      <form class="food-form" data-food-form novalidate>
        <label class="form-field food-name-field">
          <span>Food</span>
          <input type="text" name="name" autocomplete="off" maxlength="60" placeholder="e.g. Chicken rice bowl" value="${B(i.name)}" />
        </label>
        <label class="form-field">
          <span>Calories</span>
          <input type="text" name="calories" inputmode="numeric" autocomplete="off" placeholder="kcal" value="${B(i.calories)}" />
        </label>
        <label class="form-field">
          <span>Protein (g)</span>
          <input type="text" name="protein" inputmode="decimal" autocomplete="off" placeholder="optional" value="${B(i.protein)}" />
        </label>
        ${a?`<p class="finish-error" role="alert">${a}</p>`:``}
        <button type="submit" class="finish">Add food</button>
      </form>
      ${d}
    </section>
    <section class="card">
      <h3 class="sessions-heading">${n===r?`Eaten today`:`Eaten this day`}</h3>
      ${u}
    </section>
    <details class="card goals">
      <summary>Daily goals: ${t.calories.toLocaleString()} kcal, ${t.protein} g protein</summary>
      <form class="food-form" data-goals-form novalidate>
        <label class="form-field">
          <span>Calories</span>
          <input type="text" name="calories" inputmode="numeric" value="${t.calories}" />
        </label>
        <label class="form-field">
          <span>Protein (g)</span>
          <input type="text" name="protein" inputmode="numeric" value="${t.protein}" />
        </label>
        <button type="submit" class="secondary">Save goals</button>
      </form>
    </details>
  `}var Qe=`ppl-intro-seen`,$e=()=>e(Qe)===!0,et=()=>t(Qe,!0),tt=[[`🏋️`,`Pick Push, Pull, or Legs`,`You get 5–6 exercises for today, each with sets × reps, form tips, and a video.`],[`🔄`,`Make it fit you`,`<strong>Change</strong> picks a different exercise for the same muscles. <strong>Taken</strong> swaps it if the machine is busy. <strong>How it moves &amp; muscles</strong> shows the movement and what it works.`],[`✍️`,`Log as you go`,`Type the weight and reps for each set. A rest timer starts, and next time the app tells you when to add weight. Tap the numbers at the top to jump between exercises.`],[`✅`,`Finish and see your progress`,`Tap <strong>Finish workout</strong> for your stats and personal bests. The day goes on your calendar. <strong>‹ Home</strong> always takes you back.`]];function nt(){return`
    <div class="intro-sheet" role="dialog" aria-modal="true" aria-labelledby="intro-title">
      <h2 id="intro-title">Welcome to PPL at the ARC</h2>
      <p class="muted">Your push/pull/legs workout, planned and tracked. Here's how it works:</p>
      <ol class="intro-steps">
        ${tt.map(([e,t,n])=>`
            <li>
              <span class="intro-icon" aria-hidden="true">${e}</span>
              <span><strong>${t}</strong><br />${n}</span>
            </li>`).join(``)}
      </ol>
      <button type="button" class="finish intro-done" data-action="intro-done">Let's go</button>
    </div>`}var V={head:[40,14],neck:[40,25],hip:[40,53],knee:[41,73],foot:[40,92]},H={head:[60,14],neck:[60,25],hip:[60,53],knee:[55,73],foot:[54,92],knee2:[65,73],foot2:[66,92],shoulder:[52,27],shoulder2:[68,27]},rt=[[18,63,76,63],[26,63,26,92],[68,63,68,92]],U={head:[24,55],neck:[33,58],hip:[62,58],knee:[78,52],foot:[84,92]},W={head:[36,26],neck:[37,37],hip:[38,65],knee:[58,64]},G=[[28,68,62,68],[44,68,44,92],[28,68,28,24]],K={knee:[44,90],foot:[26,92]},it={"press-flat":{scenery:rt,start:{...U,elbow:[28,64],hand:[36,48]},end:{...U,elbow:[35,40],hand:[36,22]}},"press-incline":{scenery:[[24,26,52,66],[52,66,72,66],[52,66,52,92]],start:{head:[26,24],neck:[31,33],hip:[52,61],knee:[70,60],foot:[76,92],elbow:[24,50],hand:[36,38]},end:{head:[26,24],neck:[31,33],hip:[52,61],knee:[70,60],foot:[76,92],elbow:[40,20],hand:[50,8]}},"press-overhead":{scenery:G,start:{...W,foot:[60,92],elbow:[46,44],hand:[43,30]},end:{...W,foot:[60,92],elbow:[42,18],hand:[40,3]}},"lateral-raise":{start:{...H,elbow:[50,41],hand:[49,55],elbow2:[70,41],hand2:[71,55]},end:{...H,elbow:[39,28],hand:[27,30],elbow2:[81,28],hand2:[93,30]}},fly:{anchor:[8,22],anchor2:[112,22],start:{...H,elbow:[39,30],hand:[25,34],elbow2:[81,30],hand2:[95,34]},end:{...H,elbow:[48,38],hand:[57,44],elbow2:[72,38],hand2:[63,44]}},pushdown:{anchor:[58,0],start:{...V,elbow:[43,41],hand:[55,31]},end:{...V,elbow:[43,41],hand:[46,57]}},"triceps-overhead":{anchor:[8,70],start:{...V,elbow:[48,12],hand:[35,22]},end:{...V,elbow:[48,12],hand:[53,-2]}},"skull-crusher":{scenery:rt,start:{...U,elbow:[37,32],hand:[26,44]},end:{...U,elbow:[37,32],hand:[38,16]}},"vertical-pull":{anchor:[60,-4],handlebar:!0,start:{...H,elbow:[46,12],hand:[43,-2],elbow2:[74,12],hand2:[77,-2]},end:{...H,elbow:[41,40],hand:[45,24],elbow2:[79,40],hand2:[75,24]}},row:{anchor:[116,66],scenery:[[20,74,60,74]],start:{head:[38,28],neck:[39,39],hip:[34,70],knee:[58,64],foot:[80,74],elbow:[55,44],hand:[70,48]},end:{head:[36,28],neck:[37,39],hip:[34,70],knee:[58,64],foot:[80,74],elbow:[22,48],hand:[38,54]}},"straight-arm":{anchor:[74,-4],start:{...V,head:[43,15],neck:[42,26],elbow:[52,13],hand:[62,2]},end:{...V,head:[43,15],neck:[42,26],elbow:[44,42],hand:[44,58]}},"rear-delt":{anchor:[116,20],start:{...V,elbow:[55,25],hand:[70,24]},end:{...V,elbow:[28,22],hand:[44,16]}},curl:{start:{...V,elbow:[42,41],hand:[43,57]},end:{...V,elbow:[42,41],hand:[52,28]}},squat:{start:{head:[40,14],neck:[41,25],hip:[39,53],knee:[43,73],foot:[40,92],elbow:[30,33],hand:[40,24]},end:{head:[52,40],neck:[50,50],hip:[30,70],knee:[55,72],foot:[42,92],elbow:[40,59],hand:[49,49]}},hinge:{start:{...V,elbow:[41,40],hand:[42,56]},end:{head:[70,32],neck:[60,35],hip:[34,53],knee:[41,73],foot:[40,92],elbow:[60,51],hand:[60,67]}},"hip-thrust":{scenery:[[6,56,28,56],[16,56,16,92]],start:{head:[14,46],neck:[24,52],hip:[44,80],knee:[62,64],foot:[68,92],elbow:[34,68],hand:[44,77]},end:{head:[14,46],neck:[24,52],hip:[46,58],knee:[66,60],foot:[68,92],elbow:[36,50],hand:[46,55]}},lunge:{start:{head:[40,14],neck:[40,25],hip:[40,53],knee:[49,72],foot:[55,92],knee2:[33,72],foot2:[24,92],elbow:[41,39],hand:[41,55]},end:{head:[40,31],neck:[40,42],hip:[40,68],knee:[58,70],foot:[58,92],knee2:[36,89],foot2:[20,90],elbow:[41,56],hand:[41,72]}},"leg-extension":{scenery:G,start:{...W,foot:[60,90],elbow:[42,54],hand:[48,66]},end:{...W,foot:[80,62],elbow:[42,54],hand:[48,66]}},"leg-curl":{scenery:G,start:{...W,foot:[80,62],elbow:[42,54],hand:[48,66]},end:{...W,foot:[52,86],elbow:[42,54],hand:[48,66]}},"calf-raise":{scenery:[[42,93,64,93]],start:{head:[40,12],neck:[40,23],hip:[40,51],knee:[41,70],foot:[40,89],toe:[50,93],elbow:[41,37],hand:[42,53]},end:{head:[41,5],neck:[41,16],hip:[41,44],knee:[42,63],foot:[43,82],toe:[50,93],elbow:[42,30],hand:[43,46]}},crunch:{anchor:[56,-4],start:{...K,head:[42,28],neck:[42,39],hip:[42,66],elbow:[50,34],hand:[46,26]},end:{...K,head:[64,62],neck:[58,58],hip:[42,66],elbow:[64,48],hand:[62,56]}},"knee-raise":{scenery:[[24,4,60,4]],start:{head:[42,28],neck:[42,39],hip:[42,66],knee:[42,82],foot:[42,98],elbow:[42,22],hand:[42,5]},end:{head:[42,28],neck:[42,39],hip:[42,66],knee:[62,60],foot:[66,80],elbow:[42,22],hand:[42,5]}},rollout:{start:{...K,head:[58,46],neck:[52,53],hip:[40,68],elbow:[54,70],hand:[54,86]},end:{...K,head:[90,72],neck:[82,76],hip:[52,80],elbow:[96,80],hand:[104,86]}},woodchop:{anchor:[8,2],start:{...H,elbow:[44,18],hand:[36,8],elbow2:[52,14],hand2:[38,8]},end:{...H,elbow:[70,44],hand:[82,60],elbow2:[78,40],hand2:[84,58]}},"press-out":{anchor:[4,32],start:{...V,elbow:[36,38],hand:[47,32]},end:{...V,elbow:[56,30],hand:[72,30]}}},at={"Barbell Bench Press":`press-flat`,"Dumbbell Bench Press":`press-flat`,"Machine Chest Press":`press-flat`,"Incline Dumbbell Press":`press-incline`,"Incline Smith Machine Press":`press-incline`,"Incline Machine Press":`press-incline`,"Seated Dumbbell Shoulder Press":`press-overhead`,"Machine Shoulder Press":`press-overhead`,"Arnold Press":`press-overhead`,"Dumbbell Lateral Raise":`lateral-raise`,"Cable Lateral Raise":`lateral-raise`,"Machine Lateral Raise":`lateral-raise`,"Cable Triceps Pushdown":`pushdown`,"Overhead Cable Triceps Extension":`triceps-overhead`,"EZ-Bar Skull Crusher":`skull-crusher`,"Cable Fly":`fly`,"Pec Deck":`fly`,"Dumbbell Fly":`fly`,"Lat Pulldown":`vertical-pull`,"Pull-Up":`vertical-pull`,"Assisted Pull-Up Machine":`vertical-pull`,"Seated Cable Row":`row`,"Chest-Supported Dumbbell Row":`row`,"Barbell Row":`row`,"T-Bar Row":`row`,"Straight-Arm Cable Pulldown":`straight-arm`,"Single-Arm Cable Row":`row`,"Single-Arm Dumbbell Row":`row`,"Face Pull":`rear-delt`,"Reverse Pec Deck":`rear-delt`,"Bent-Over Dumbbell Rear Delt Fly":`rear-delt`,"Dumbbell Curl":`curl`,"Incline Dumbbell Curl":`curl`,"EZ-Bar Curl":`curl`,"Preacher Curl Machine":`curl`,"Hammer Curl":`curl`,"Cable Rope Hammer Curl":`curl`,"Reverse-Grip EZ-Bar Curl":`curl`,"Barbell Back Squat":`squat`,"Hack Squat":`squat`,"Leg Press":`squat`,"Goblet Squat":`squat`,"Romanian Deadlift":`hinge`,"Dumbbell Romanian Deadlift":`hinge`,"Barbell Hip Thrust":`hip-thrust`,"Bulgarian Split Squat":`lunge`,"Walking Lunge":`lunge`,"Leg Extension":`leg-extension`,"Seated Leg Curl":`leg-curl`,"Lying Leg Curl":`leg-curl`,"Single-Leg Cable Curl":`leg-curl`,"Standing Calf Raise":`calf-raise`,"Seated Calf Raise":`calf-raise`,"Leg Press Calf Raise":`calf-raise`,"Cable Crunch":`crunch`,"Hanging Knee Raise":`knee-raise`,"Ab Wheel Rollout":`rollout`,"Decline Sit-Up":`crunch`,"Cable Woodchop":`woodchop`,"Pallof Press":`press-out`,"Hanging Oblique Knee Raise":`knee-raise`};function ot(e){return[`barbell`,`bench-press`,`squat-rack`,`smith-machine`,`ez-bar`,`t-bar-row`].includes(e)?`plate`:e===`dumbbells`?`dumbbell`:[`cable`,`cable-row`,`lat-pulldown`].includes(e)?`cable`:e===`ab-wheel`?`wheel`:e===`pull-up-bar`||e===`decline-bench`?`none`:`handle`}var st=`2.4s`,ct=`calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"`;function q(e,t,n,r){return!r||t===n?{attr:`${e}="${r?t:n}"`,anim:``}:{attr:`${e}="${t}"`,anim:`<animate attributeName="${e}" values="${t};${n};${t}" dur="${st}" repeatCount="indefinite" ${ct} />`}}function J(e,t,n,r){let i=[q(`x1`,t[0][0],n[0][0],r),q(`y1`,t[0][1],n[0][1],r),q(`x2`,t[1][0],n[1][0],r),q(`y2`,t[1][1],n[1][1],r)];return`<line class="${e}" ${i.map(e=>e.attr).join(` `)}>${i.map(e=>e.anim).join(``)}</line>`}function Y(e,t,n,r,i){let a=[q(`cx`,t[0],n[0],i),q(`cy`,t[1],n[1],i)];return`<circle class="${e}" r="${r}" ${a.map(e=>e.attr).join(` `)}>${a.map(e=>e.anim).join(``)}</circle>`}function lt(e){let t=e.shoulder??e.neck,n=[[e.neck,e.hip],[t,e.elbow],[e.elbow,e.hand],[e.hip,e.knee],[e.knee,e.foot]];return e.shoulder&&n.push([e.neck,e.shoulder]),e.shoulder2&&n.push([e.neck,e.shoulder2]),e.elbow2&&e.hand2&&n.push([e.shoulder2??e.neck,e.elbow2],[e.elbow2,e.hand2]),e.knee2&&e.foot2&&n.push([e.hip,e.knee2],[e.knee2,e.foot2]),e.toe&&n.push([e.foot,e.toe]),n}function ut(e,t=!0){let n=it[at[e.name]??`curl`],{start:r,end:i}=n,a=ot(e.equipment),o=(n.scenery??[]).map(([e,t,n,r])=>`<line class="scenery" x1="${e}" y1="${t}" x2="${n}" y2="${r}" />`),s=lt(r),c=lt(i),l=s.map((e,n)=>J(`limb`,e,c[n],t));l.push(Y(`head`,r.head,i.head,7,t));let u=[[r.hand,i.hand,n.anchor]];r.hand2&&i.hand2&&u.push([r.hand2,i.hand2,n.anchor2??n.anchor]);let d=[];n.handlebar&&r.hand2&&i.hand2&&d.push(J(`prop-line`,[r.hand,r.hand2],[i.hand,i.hand2],t));for(let[e,n,r]of u)a===`cable`&&r&&d.push(J(`cable`,[r,e],[r,n],t)),a===`plate`&&d.push(Y(`plate`,e,n,6,t)),a===`dumbbell`&&d.push(Y(`dumbbell`,e,n,3.5,t)),a===`wheel`&&d.push(Y(`wheel`,[e[0],e[1]+2],[n[0],n[1]+2],4,t)),(a===`handle`||a===`cable`)&&d.push(Y(`handle`,e,n,2.2,t));return`
    <figure class="movement">
      <svg viewBox="0 -8 120 104" role="img" aria-label="Animated figure doing a ${e.name}">
        <line class="ground" x1="0" y1="93" x2="120" y2="93" />
        ${o.join(``)}${d.join(``)}${l.join(``)}
      </svg>
    </figure>`}var X={Chest:{regions:[`chest`],description:`The pecs, across the front of your chest. They push your arms forward and together.`},"Upper chest":{regions:[`chest`],description:`The top part of the pecs, just under your collarbone. Incline presses hit it most.`},"Front delts":{regions:[`front-delts`],description:`The front of your shoulder. It raises your arm forward and helps every press.`},"Side delts":{regions:[`side-delts`],description:`The outside of your shoulder. It lifts your arm out to the side and makes shoulders look wider.`},"Rear delts":{regions:[`rear-delts`],description:`The back of your shoulder. It pulls your arm back and helps your posture.`},Biceps:{regions:[`biceps`],description:`The front of your upper arm. It bends your elbow and turns your palm up.`},"Biceps (long head)":{regions:[`biceps`],description:`The outer part of the biceps, on the front of your upper arm. Curls with your arm behind you stretch it most.`},Brachialis:{regions:[`biceps`],description:`Under the biceps, on the outer side of your upper arm. It bends your elbow, especially with thumbs up.`},Triceps:{regions:[`triceps`],description:`The back of your upper arm, and most of its size. It straightens your elbow.`},"Triceps (long head)":{regions:[`triceps`],description:`The biggest part of the triceps, on the inner back of your upper arm. Overhead work stretches it most.`},Forearms:{regions:[`forearms`],description:`Your lower arm, elbow to wrist. They control your grip and wrist.`},Lats:{regions:[`lats`],description:`The wide muscles down the sides of your back, from armpit to waist. They pull your arms down and back.`},"Upper back":{regions:[`upper-back`],description:`Your traps and rhomboids, between and above your shoulder blades. They pull your shoulders back.`},"Mid back":{regions:[`upper-back`],description:`Between your shoulder blades (rhomboids and middle traps). They squeeze your shoulder blades together.`},"Lower back":{regions:[`lower-back`],description:`Along your spine just above your hips. It keeps your back straight when you bend or lift.`},Abs:{regions:[`abs`],description:`The front of your stomach (the six-pack). They curl your ribs toward your hips.`},Obliques:{regions:[`obliques`],description:`The sides of your waist. They twist your torso and bend it sideways.`},Core:{regions:[`abs`,`obliques`],description:`All the muscles around your midsection. They keep your torso steady while your arms and legs move.`},"Hip flexors":{regions:[`hip-flexors`],description:`The front of your hip, where your thigh meets your body. They lift your knees.`},Glutes:{regions:[`glutes`],description:`Your butt. They push your hips forward, like standing up out of a squat.`},Quads:{regions:[`quads`],description:`The front of your thigh. They straighten your knee.`},Hamstrings:{regions:[`hamstrings`],description:`The back of your thigh. They bend your knee and help you hinge at the hips.`},Adductors:{regions:[`adductors`],description:`Your inner thigh. They pull your legs together and help in deep squats.`},Calves:{regions:[`calves`],description:`The back of your lower leg. They point your toes and push you up onto them.`},"Calves (soleus)":{regions:[`calves`],description:`The lower, flatter calf muscle, under the main one. Bent-knee calf raises work it most.`}},dt=[45,35,25,10,5,2.5],ft=[`barbell`,`bench-press`,`squat-rack`];function pt(e){if(e<45)return null;let t=(e-45)/2,n=[];for(let e of dt)for(;t>=e;)n.push(e),t-=e;return{perSide:n,total:45+n.reduce((e,t)=>e+t,0)*2}}function mt(e){let[,t,n]=e.match(/(\d+)(?:–(\d+))?/);return{min:Number(t),max:Number(n??t)}}function ht(e,t){let{min:n,max:r}=mt(e.reps),i=e.weightStep??5,a=t.sets.length>=e.sets&&t.sets.every(e=>e.reps>=r),o=t.sets.filter(e=>e.reps<n).length>t.sets.length/2,s=t.sets.map(e=>e.weight).filter(e=>e!==null);if(s.length===0)return a?{direction:`up`,weight:null,message:`You hit ${r} on every set. Make it harder: add weight or slow the reps down.`}:{direction:`same`,weight:null,message:`Aim for one more rep per set than last time.`};if(e.load===`assisted`){let e=Math.min(...s);if(a){let t=Math.max(e-i,0);return{direction:`up`,weight:t,message:`You hit ${r} on every set. Lower the counterweight to ${t} lb.`}}if(o){let t=e+i;return{direction:`down`,weight:t,message:`Most sets were under ${n} reps. Raise the counterweight to ${t} lb.`}}return{direction:`same`,weight:e,message:`Stay at ${e} lb counterweight and aim for one more rep per set.`}}let c=Math.max(...s);if(a){let e=c+i;return{direction:`up`,weight:e,message:`You hit ${r} on every set. Go up to ${e} lb today.`}}if(o&&c>0){let e=Math.max(c-i,0);return{direction:`down`,weight:e,message:`Most sets were under ${n} reps. Drop to ${e} lb and own the reps.`}}return{direction:`same`,weight:c,message:`Stay at ${c} lb and aim for one more rep per set.`}}function gt(e,t){return[...e].sort((e,t)=>e.date.localeCompare(t.date)).flatMap(e=>e.exercises.filter(e=>e.name===t).map(t=>{let n=t.sets.map(e=>e.weight).filter(e=>e!==null);return{date:e.date,sets:t.sets,topWeight:n.length>0?Math.max(...n):null,bestReps:Math.max(...t.sets.map(e=>e.reps))}}))}function _t(e){let t=new Map;for(let n of e)for(let{name:e}of n.exercises){let r=t.get(e);t.set(e,{name:e,sessions:(r?.sessions??0)+1,lastDate:r&&r.lastDate>n.date?r.lastDate:n.date})}return[...t.values()].sort((e,t)=>t.lastDate.localeCompare(e.lastDate)||e.name.localeCompare(t.name))}function Z(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function vt(e){return e.some(e=>e.topWeight!==null)?{unit:`lb`,values:e.map(e=>e.topWeight??0)}:{unit:`reps`,values:e.map(e=>e.bestReps)}}function yt(e){let t=Object.keys(y),n=t=>t.some(t=>t.options.some(t=>t.name===e));return t.find(e=>n(y[e]))??null}var bt=e=>{let t=yt(e);return t?`day-${t}`:``},xt=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function St(e){let t=_t(e).length;return t===0?``:`
    <button type="button" class="card progress-card" data-action="progress">
      <span>
        <strong>Your progress</strong>
        <span class="muted">${xt(t,`exercise`)} logged</span>
      </span>
      <span class="chevron">›</span>
    </button>`}function Ct(e){let t=_t(e);return`
    <div class="workout-header">
      <h2>Your progress</h2>
      <button type="button" class="secondary" data-action="home">Done</button>
    </div>
    ${t.length===0?`<p class="hint">Nothing logged yet. Log some sets in a workout and tap <strong>Finish workout</strong>, and each exercise will show up here.</p>`:`<ul class="progress-list">
          ${t.map(e=>`
                <li>
                  <button type="button" class="progress-row ${bt(e.name)}" data-history="${e.name}">
                    <span class="progress-dot"></span>
                    <span class="progress-name">${e.name}</span>
                    <span class="muted">${xt(e.sessions,`session`)} · ${Z(e.lastDate)}</span>
                  </button>
                </li>`).join(``)}
        </ul>`}
  `}function wt(e){let{unit:t,values:n}=vt(e),[r,i]=[320,170],[a,o,s,c]=[40,14,18,28],l=Math.min(...n),u=Math.max(...n),d=u===l?5:(u-l)*.15,[f,ee]=[Math.max(l-d,0),u+d],p=e=>a+e*(r-a-o)/(n.length-1),m=e=>s+(ee-e)*(i-s-c)/(ee-f),te=n.map((e,t)=>`${p(t).toFixed(1)},${m(e).toFixed(1)}`).join(` `),h=n.length-1;return`
    <svg class="chart" viewBox="0 0 ${r} ${i}" role="img"
      aria-label="${t===`lb`?`Top weight`:`Best reps`} per session, from ${n[0]} to ${n[h]} ${t}">
      <line class="chart-axis" x1="${a}" y1="${i-c}" x2="${r-o}" y2="${i-c}" />
      <text class="chart-label" x="${a-6}" y="${m(u)+4}" text-anchor="end">${u}</text>
      ${l===u?``:`<text class="chart-label" x="${a-6}" y="${m(l)+4}" text-anchor="end">${l}</text>`}
      <text class="chart-label" x="${a}" y="${i-8}">${Z(e[0].date)}</text>
      <text class="chart-label" x="${r-o}" y="${i-8}" text-anchor="end">${Z(e[h].date)}</text>
      <polyline class="chart-line" points="${te}" />
      ${n.map((e,t)=>`<circle class="chart-point" cx="${p(t).toFixed(1)}" cy="${m(e).toFixed(1)}" r="4" />`).join(``)}
      <text class="chart-value" x="${p(h)}" y="${m(n[h])-10}" text-anchor="end">${n[h]} ${t}</text>
    </svg>`}function Tt(e){let{unit:t,values:n}=vt(e),[r,i]=[n[0],n[n.length-1]],a=i-r,o=a===0?`no change`:`${a>0?`+`:``}${a} ${t}`;return`
    <p class="progress-summary">
      <strong>${r} → ${i} ${t}</strong>
      <span class="${a>0?`gain`:`muted`}">${o} since ${Z(e[0].date)}</span>
    </p>`}function Et(e,t,n){let r=gt(e,t),i=r.length>=2?`${Tt(r)}${wt(r)}`:`<p class="hint">Log this exercise in another session to see your trend.</p>`,a=[...r].reverse().map(e=>`
        <li class="session-row">
          <span class="session-date">${Z(e.date)}</span>
          <span>${fe(e.sets)}</span>
        </li>`).join(``);return`
    <button type="button" class="link-button back-link" data-action="back">‹ ${n}</button>
    <section class="card progress-detail ${bt(t)}">
      <h2>${t}</h2>
      <p class="muted">${xt(r.length,`session`)}</p>
      ${i}
    </section>
    <section class="card">
      <h3 class="sessions-heading">Every session</h3>
      <ul class="session-list">${a||`<li class="muted">No sessions logged yet.</li>`}</ul>
    </section>
  `}var Dt=[`The only bad workout is the one that didn't happen.`,`You don't have to be extreme, just consistent.`,`Small progress is still progress.`,`Show up today. Future you is counting on it.`,`Discipline is doing it when you don't feel like it.`,`One more rep than last time. That's the whole game.`,`Strong is built one session at a time.`,`Motivation gets you started. Habit keeps you going.`,`The weight doesn't care about your excuses.`,`Earn the rest day.`,`Good form today, heavier weight tomorrow.`,`Compare yourself to who you were last month.`];function Ot(e){return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)%Dt.length}function kt(e){let{max:t}=mt(e.reps);return t<=8?180:t<=12?120:90}function At(e){return`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`}var jt=15e3;function Mt(e){let t=null,n=0,r,i=null;function a(){typeof AudioContext<`u`&&(i??=new AudioContext,i.resume())}function o(){if(navigator.vibrate?.([200,100,200]),i)for(let[e,t]of[[0,880],[.25,1175]]){let n=i.createOscillator(),r=i.createGain();n.frequency.value=t,r.gain.setValueAtTime(.3,i.currentTime+e),r.gain.exponentialRampToValueAtTime(.001,i.currentTime+e+.2),n.connect(r).connect(i.destination),n.start(i.currentTime+e),n.stop(i.currentTime+e+.2)}}function s(){window.clearInterval(r),t=null,e.hidden=!0,document.body.classList.remove(`resting`)}function c(){if(t===null)return;let i=Math.ceil((t-Date.now())/1e3);if(i>0){e.innerHTML=`
        <div class="rest-progress" style="width: ${Math.min(100,i/n*100)}%"></div>
        <span class="rest-label">Rest <strong class="rest-clock">${At(i)}</strong></span>
        <span class="rest-buttons">
          <button type="button" data-rest="add">+30s</button>
          <button type="button" data-rest="skip">Skip</button>
        </span>`;return}window.clearInterval(r),e.classList.add(`rest-done`),e.innerHTML=`
      <span class="rest-label"><strong>Time for your next set</strong></span>
      <span class="rest-buttons"><button type="button" data-rest="skip">OK</button></span>`,o();let a=t;window.setTimeout(()=>{t===a&&s()},jt)}return document.addEventListener(`pointerup`,a,{once:!0}),e.addEventListener(`click`,e=>{let r=e.target.closest(`[data-rest]`);r&&t!==null&&(r.dataset.rest===`add`?(t+=3e4,n+=30,c()):s())}),{start(i){a(),window.clearInterval(r),t=Date.now()+i*1e3,n=i,e.hidden=!1,e.classList.remove(`rest-done`),document.body.classList.add(`resting`),c(),r=window.setInterval(c,250)}}}var Nt=[...Object.keys(y).flatMap(e=>y[e].map(t=>({day:v[e],slot:t}))),...b.map(e=>({day:`Abs`,slot:e}))],Pt=e=>Nt.flatMap(({slot:e})=>e.options).filter(t=>t.equipment===e).length;function Ft(e,t){let n=t?`Last backup: ${Z(t)}.`:`No backup yet.`;return`
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
    </section>`}function It(e){let t=Nt.filter(({slot:t})=>t.options.every(t=>e.has(t.equipment)));return`
    <h2 class="section-title">Equipment at the ARC</h2>
    <p class="hint">Untick anything the ARC doesn't have, and workouts won't suggest exercises that need it. The number is how many exercises use it. Changes save right away.</p>
    ${t.length>0?`<p class="finish-error" role="alert">Nothing left for: ${t.map(({day:e,slot:t})=>`${t.label} (${e})`).join(`, `)}. Those slots will still suggest an exercise.</p>`:``}
    ${_.map(t=>`
      <section class="card equipment-group">
        <h3>${t.label}</h3>
        ${Object.entries(t.items).map(([t,n])=>`
              <label class="check-row">
                <input type="checkbox" data-equipment="${t}" ${e.has(t)?``:`checked`} />
                <span class="check-label">${n}</span>
                <span class="muted">${Pt(t)}</span>
              </label>`).join(``)}
      </section>`).join(``)}
  `}function Lt(e,t,n,r){return`
    <div class="workout-header">
      <h2>Settings</h2>
      <button type="button" class="secondary" data-action="home">Done</button>
    </div>
    ${r}
    <section class="card">
      <h3>Help</h3>
      <p class="hint">New here, or showing the app to someone?</p>
      <div class="backup-buttons">
        <button type="button" class="secondary" data-action="show-intro">Show the intro again</button>
      </div>
    </section>
    ${Ft(t,n)}
    ${It(e)}
  `}function Rt(e,t,n,r){let i=e.exercises.flatMap(e=>e.sets),a=i.reduce((e,t)=>e+(t.weight??0)*t.reps,0),o=n===void 0?null:Math.max(1,Math.round((r-n)/6e4)),s=[],c=!0;for(let n of e.exercises){let r=gt(t,n.name);if(r.length===0)continue;c=!1;let[i]=gt([{...e,exercises:[n]}],n.name),a=r.map(e=>e.topWeight).filter(e=>e!==null);if(i.topWeight!==null&&a.length>0){let e=Math.max(...a);i.topWeight>e&&s.push({name:n.name,value:i.topWeight,previous:e,unit:`lb`})}else if(i.topWeight===null){let e=Math.max(...r.map(e=>e.bestReps));i.bestReps>e&&s.push({name:n.name,value:i.bestReps,previous:e,unit:`reps`})}}return{sets:i.length,exercises:e.exercises.length,volume:a,minutes:o,bests:s,allFirstTimes:c}}function zt(e,t){return`<div class="stat"><strong>${e}</strong><span>${t}</span></div>`}function Bt(e){return e.bests.length>0?`
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
      </section>`:e.allFirstTimes||e.sets===0?``:`<p class="hint">No new bests today. Showing up is what builds them.</p>`}function Vt(e,t){let[n,r,i]=e.date.split(`-`).map(Number),a=new Date(n,r-1,i).toLocaleDateString(void 0,{weekday:`long`,month:`short`,day:`numeric`}),o=e.exercises.map(e=>`
        <li class="session-row">
          <span>${e.name}</span>
          <span class="muted">${fe(e.sets)}</span>
        </li>`).join(``);return`
    <section class="card summary-card day-${e.day}">
      <p class="slot-label">Workout complete</p>
      <h2>${v[e.day]} day 💪</h2>
      <p class="muted">${a}</p>
      <div class="stat-grid">
        ${zt(String(t.sets),t.sets===1?`set`:`sets`)}
        ${zt(String(t.exercises),t.exercises===1?`exercise`:`exercises`)}
        ${zt(t.volume.toLocaleString(),`lb lifted`)}
        ${t.minutes===null?``:zt(String(t.minutes),t.minutes===1?`minute`:`minutes`)}
      </div>
    </section>
    ${Bt(t)}
    ${o?`<section class="card">
            <h3 class="sessions-heading">What you did</h3>
            <ul class="session-list">${o}</ul>
          </section>`:`<p class="hint">No sets were logged, but the day still counts on your calendar.</p>`}
    <button type="button" class="finish day-${e.day}" data-action="summary-done">Done</button>
    <button type="button" class="link-button undo-link" data-action="undo">Undo, I wasn't finished</button>
  `}var Ht=Object.keys(v),Ut=[`S`,`M`,`T`,`W`,`T`,`F`,`S`],Q=e=>`${e} set${e===1?``:`s`} logged`,$=e=>he(e.day,e.abs),Wt=()=>window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches??!1;function Gt(e){let t=e.targetMuscles.filter(e=>e in X),n=new Set(t.flatMap(e=>X[e].regions)),r=t.map(e=>`<li><strong>${e}</strong>: ${X[e].description}</li>`).join(``);return`
    <div class="muscle-info">
      <h4>How it moves</h4>
      ${ut(e,!Wt())}
      <h4>Muscles it works</h4>
      ${Ve(n)}
      <ul class="muscle-notes">${r}</ul>
    </div>`}var Kt=e=>`jump-chip${C([e])>0?` logged`:``}`;function qt(e,t){return e.map(e=>se(e.weight)).filter(e=>e!==null).at(-1)??t}function Jt(e){if(e===null)return`<span class="muted">Type a weight to see which plates to load.</span>`;let t=pt(e);if(t===null)return`<span class="muted">${e} lb is less than the 45-lb bar.</span>`;let n=t.total===e?``:` <span class="muted">(closest to ${e} you can load)</span>`,r=t.perSide.length===0?`<span class="muted">Just the empty bar</span>`:`Each side ${t.perSide.map(e=>`<span class="plate">${e}</span>`).join(``)}`;return`<span><strong>${t.total} lb</strong> on a 45-lb bar${n}</span><span class="plate-row">${r}</span>`}function Yt(e,t=()=>new Date){let r=we(),i=`home`,a=d(),o=ee(),s=A(t()),c={name:``,calories:``,protein:``},l=null,u=!$e(),g=null,_=null,y=null,S=ke(),w=null,T=null,E=null,D=`progress`,O=null,k=new Set,j=null,M=new Set(Ee()),N=null,P=Se(),F=null,be=Ot(t()),I={year:t().getFullYear(),month:t().getMonth()};e.innerHTML=`
    <header class="app-header">
      <div class="header-row">
        <button type="button" class="brand" data-action="home" aria-label="PPL at the ARC, home">
          <span class="brand-mark">PPL</span>
          <span class="brand-name">at the ARC</span>
        </button>
        <button type="button" class="home-button" data-action="home" hidden>‹ Home</button>
        <div class="header-buttons">
          <button type="button" class="secondary settings-button" data-action="food">🍽 Food</button>
          <button type="button" class="secondary settings-button" data-action="settings">⚙ Settings</button>
        </div>
      </div>
      <nav class="day-picker" aria-label="Start a workout">
        ${Ht.map(e=>`<button type="button" class="day-${e}" data-day="${e}">${v[e]}</button>`).join(``)}
      </nav>
    </header>
    <main id="view"></main>
    <div class="rest-timer" role="status" aria-live="polite" hidden></div>
    <div class="intro-backdrop" hidden>${nt()}</div>
    <div class="confirm-backdrop" hidden>
      <div class="confirm-sheet" role="alertdialog" aria-modal="true" aria-labelledby="confirm-message">
        <p id="confirm-message"></p>
        <div class="confirm-buttons">
          <button type="button" data-confirm="no">Cancel</button>
          <button type="button" class="confirm-yes" data-confirm="yes"></button>
        </div>
      </div>
    </div>
  `;let L=e.querySelector(`#view`),xe=Mt(e.querySelector(`.rest-timer`));function R(){Te(r)||(N=`Your sets can't be saved on this device. Is this a private browsing window?`)}function z(e,t,n,r){e?w={message:t,confirmLabel:n,onConfirm:r}:r()}function Fe(e){let t=r?C(r.sets):0,n=r?v[r.day]:``;z(t>0,`Discard the ${Q(t)} for ${n} day?`,`Discard`,e)}let Ie=e=>t=>!M.has(t.equipment)&&!e.includes(t.equipment);function Le(e,n=!1,i=[],a=t().getTime()){let o=he(e,n),s=ge(o,Math.random,Ie(i));r={day:e,abs:n,taken:i,startedAt:a,workout:s,sets:le(o,s)},k.clear(),R()}function Re(e,t){let n=$(e)[t],{equipment:r}=n.options[e.workout[t]],i=e.taken.includes(r)?e.taken:[...e.taken,r],a=_e(n,e.workout[t],Ie(i));if(a===null){e.taken=i,R(),j={slot:t,text:`Nothing else for this is free. Wait for the ${ie[r].toLowerCase()}, or tap Change.`};return}let o=C([e.sets[t]]);z(o>0,`Swap this exercise and discard its ${Q(o)}?`,`Swap`,()=>{e.taken=i,e.workout=ve(e.workout,t,a),e.sets[t]=ce($(e),t,a),R(),j={slot:t,text:`${ie[r]} is taken, so here's ${n.options[a].name}.`}})}function ze(e){let t=ge(b,Math.random,Ie(e.taken));e.abs=!0,e.workout=[...e.workout,...t],e.sets=[...e.sets,...le(b,t)],R()}function Be(e){let t=e.workout.length-b.length,n=C(e.sets.slice(t));z(n>0,`Remove the abs finisher and its ${Q(n)}?`,`Remove`,()=>{e.abs=!1,e.workout=e.workout.slice(0,t),e.sets=e.sets.slice(0,t),R()})}function Ve(){if(!F)return``;let e=F.undo||F.undoFood?`<button type="button" class="link-button" data-action="undo">Undo</button>`:``;return`<div class="notice" role="status"><span>${F.message}</span>${e}</div>`}function Ge(){return r?`
      <button type="button" class="resume day-${r.day}" data-action="resume">
        <span>Continue ${v[r.day]} day</span>
        <span class="resume-detail">${Q(C(r.sets))} ›</span>
      </button>`:``}function Ke(){let{year:e,month:n}=I,r=`${e}-${String(n+1).padStart(2,`0`)}-`,i=P.filter(e=>e.date.startsWith(r)),a=new Map;for(let e of i)a.set(e.date,[...a.get(e.date)??[],e.day]);let o=A(t()),s=new Date(e,n,1).toLocaleDateString(void 0,{month:`long`,year:`numeric`}),c=Ht.map(e=>{let t=i.filter(t=>t.day===e).length;return`<span class="count-chip day-${e}">${v[e]} ${t}</span>`}).join(``),l=He(e,n).map(e=>{if(e===null)return`<div class="cal-cell blank"></div>`;let t=`${r}${String(e).padStart(2,`0`)}`,n=a.get(t)??[],i=[`cal-cell`,n.length>0?`logged day-${n[0]}`:``,t===o?`today`:``],s=n.length>1?` style="background: linear-gradient(135deg, ${n.map((e,t)=>`var(--${e}) ${t*100/n.length}% ${(t+1)*100/n.length}%`).join(`, `)})"`:``,c=`<span class="cal-date">${e}</span>${n.map(e=>`<span class="cal-split">${v[e]}</span>`).join(``)}`;if(n.length===0)return`<div class="${i.join(` `)}">${c}</div>`;let l=`${e}: ${n.map(e=>v[e]).join(` and `)}. Tap to see or edit.`;return`<button type="button" class="${i.join(` `)}"${s} data-date="${t}" aria-label="${l}">${c}</button>`}).join(``),u=i.length===0?`<p class="hint">No workouts logged this month. Pick a split above, then tap <strong>Finish workout</strong>.</p>`:``;return`
      <section class="card calendar">
        <div class="cal-header">
          <button type="button" class="icon-button" data-action="prev-month" aria-label="Previous month">‹</button>
          <h2>${s}</h2>
          <button type="button" class="icon-button" data-action="next-month" aria-label="Next month">›</button>
        </div>
        <p class="cal-total"><strong>${i.length}</strong> workout${i.length===1?``:`s`} this month</p>
        <div class="count-chips">${c}</div>
        <div class="cal-grid">
          ${Ut.map(e=>`<div class="cal-weekday">${e}</div>`).join(``)}
          ${l}
        </div>
        ${u}
      </section>
    `}function Je(){return`
      ${Ve()}
      ${Ge()}
      <section class="card quote-card">
        <p class="quote">“${Dt[be]}”</p>
        <button type="button" class="link-button" data-action="next-quote">Another one</button>
      </section>
      ${Ke()}
      ${Xe(a,o,A(t()))}
      ${St(P)}
    `}function Ye(e,t){return`
      <div class="options" role="group" aria-label="Choose an exercise">
        ${$(e)[t].options.map((n,r)=>{let i=e.workout[t]===r;if(M.has(n.equipment)&&!i)return``;let a=e.taken.includes(n.equipment)?`<span class="tag">Taken</span>`:``;return`
              <button type="button" class="option${i?` current`:``}" data-choose="${t}:${r}" aria-pressed="${i}">
                <span class="option-name">${n.name}${a}</span>
                <span class="option-detail">${n.targetMuscles.join(` · `)} · ${n.sets}×${n.reps}</span>
              </button>`}).join(``)}
      </div>
    `}function Qe(e,t){if(!t)return`<p class="weight">${ae(e)}</p>`;let n={up:`⬆`,same:`＝`,down:`⬇`}[t.direction];return`<p class="advice advice-${t.direction}"><span class="advice-icon">${n}</span>${t.message}</p>`}function tt(e,t,n,r,i){return`<div class="set-log">${r?`<p class="last-time">
          <span>Last time: <strong>${fe(r.sets)}</strong></span>
          <button type="button" class="link-button" data-history="${e.name}">History</button>
        </p>`:`<p class="last-time">First time logging this one.</p>`}${n.map((n,a)=>{let o=i?.weight??r?.sets[a]?.weight??r?.sets.at(-1)?.weight,s=(e,r,i,o)=>`
          <label class="field">
            <input type="text" inputmode="${i}" autocomplete="off" data-set="${t}:${a}:${e}"
              value="${B(n[e])}" placeholder="${o}"
              aria-label="Set ${a+1} ${e===`weight`?`weight in pounds`:`reps`}" />
            <span>${r}</span>
          </label>`;return`
          <div class="${pe(n)}">
            <span class="set-number">${a+1}</span>
            ${s(`weight`,`lb`,`decimal`,o==null?``:String(o))}
            ${s(`reps`,`reps`,`numeric`,e.reps)}
          </div>`}).join(``)}${ft.includes(e.equipment)?(()=>{let e=i?.weight??r?.sets.at(-1)?.weight??null;return`<p class="plate-helper" data-plates="${t}" data-fallback="${e??``}">
              ${Jt(qt(n,e))}
            </p>`})():``}</div>`}function V(e){let t=$(e),n=t.length-b.length,r=ye(t,e.workout).map((r,i)=>{let a=Oe(P,r.name),o=a?ht(r,a):null;return`${e.abs&&i===n?`
      <li class="section-heading">
        <h3>Abs finisher</h3>
        <button type="button" class="link-button" data-action="remove-abs">Remove</button>
      </li>`:``}
          <li class="card exercise-card" id="exercise-${i}" data-slot="${i}">
            <div class="exercise-top">
              <span class="exercise-number">${i+1}</span>
              <div>
                <p class="slot-label">${t[i].label}</p>
                <h3>${r.name}</h3>
              </div>
            </div>
            <div class="muscle-chips">${r.targetMuscles.map(e=>`<span>${e}</span>`).join(``)}</div>
            <button type="button" class="link-button muscles-toggle" data-muscles="${i}" aria-expanded="${k.has(i)}">
              ${k.has(i)?`Hide ▴`:`How it moves &amp; muscles ▾`}
            </button>
            ${k.has(i)?Gt(r):``}
            <p class="sets">${r.sets} sets × ${r.reps} reps</p>
            ${Qe(r,o)}
            <ul class="cues">${r.cues.map(e=>`<li>${e}</li>`).join(``)}</ul>
            <div class="card-actions">
              <a href="${oe(r)}" target="_blank" rel="noopener noreferrer">▶ Form video</a>
              <div class="card-buttons">
                <button type="button" data-taken="${i}" aria-label="${ie[r.equipment]} is taken; swap exercise">Taken</button>
                <button type="button" data-toggle="${i}" aria-expanded="${O===i}">${O===i?`Close`:`Change`}</button>
              </div>
            </div>
            ${j?.slot===i?`<p class="slot-message" role="status">${j.text}</p>`:``}
            ${O===i?Ye(e,i):``}
            ${tt(r,i,e.sets[i],a,o)}
          </li>`}).join(``),i=N?`<p class="finish-error" role="alert">${N}</p>`:``,a=ye(t,e.workout).map((t,n)=>`
          <button type="button" class="${Kt(e.sets[n])}" data-jump="${n}" aria-label="Go to exercise ${n+1}, ${t.name}">
            <span class="jump-number">${n+1}</span><span class="jump-name">${t.name}</span>
          </button>`).join(``);return`
      <div class="workout-header">
        <h2>${v[e.day]} day <span class="muted">· ${t.length} exercises</span></h2>
        <button type="button" class="secondary" data-action="shuffle">Shuffle</button>
      </div>
      <nav class="exercise-nav" aria-label="Jump to an exercise">${a}</nav>
      <ol class="exercise-list">${r}</ol>
      ${e.abs?``:`<button type="button" class="add-abs" data-action="add-abs">
              ＋ Add abs finisher <span class="muted">· ${b.length} exercises</span>
            </button>`}
      ${i}
      <button type="button" class="finish" data-action="finish">
        Finish workout <span class="finish-count">· ${Q(C(e.sets))}</span>
      </button>
    `}let H=null;function rt(){H?.disconnect();let t=e.querySelector(`.exercise-nav`);t&&typeof IntersectionObserver<`u`&&(H=new IntersectionObserver(e=>{for(let n of e){if(!n.isIntersecting)continue;let e=n.target.dataset.slot;t.querySelectorAll(`.jump-chip`).forEach(e=>e.classList.remove(`current`));let r=t.querySelector(`[data-jump="${e}"]`);r&&(r.classList.add(`current`),t.scrollTo({left:r.offsetLeft-16,behavior:`smooth`}))}},{rootMargin:`-45% 0px -54% 0px`}),e.querySelectorAll(`.exercise-card`).forEach(e=>H.observe(e)))}function U(){let t=e.querySelector(`.confirm-backdrop`),n=t.hidden;t.hidden=w===null,w&&(t.querySelector(`#confirm-message`).textContent=w.message,t.querySelector(`.confirm-yes`).textContent=w.confirmLabel,n&&t.querySelector(`[data-confirm="no"]`).focus())}function W(){let t=e.querySelector(`.intro-backdrop`),n=t.hidden;t.hidden=!u,u&&n&&t.querySelector(`.intro-done`).focus()}function G(){U(),W(),i===`workout`&&!r&&(i=`home`);let n=i===`workout`?r:null;e.dataset.split=n?.day??``,e.querySelectorAll(`[data-day]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e.dataset.day===n?.day))}),e.querySelector(`[data-action="settings"]`).setAttribute(`aria-pressed`,String(i===`settings`)),e.querySelector(`[data-action="food"]`).setAttribute(`aria-pressed`,String(i===`food`));let u=i===`home`;e.querySelector(`.brand`).hidden=!u,e.querySelector(`.home-button`).hidden=u,n?(L.innerHTML=V(n),rt()):i===`summary`&&T?L.innerHTML=Vt(T.workout,T.stats):i===`food`?L.innerHTML=Ze(a,o,s,A(t()),c,l,Ve()):i===`settings`?L.innerHTML=Lt(M,P.length,S,Ve()):i===`day`&&g?L.innerHTML=qe(P,g,_,y,Ve()):i===`progress`&&E?L.innerHTML=Et(P,E,D===`workout`?`Back to workout`:`All exercises`):i===`progress`?L.innerHTML=Ct(P):L.innerHTML=Je()}function K(e){if(me(e.sets)){N=`Some sets (in red) don't look right. Reps must be 1–100 and weight 0–2000 lb.`;return}let n=P,a={date:A(t()),day:e.day,exercises:de($(e),e.workout,e.sets)};P=[...P,a],Ce(P)?(F={message:`${v[e.day]} day logged with ${Q(C(e.sets))}. Nice work!`,undo:{log:n,draft:e}},T={workout:a,stats:Rt(a,n,e.startedAt,t().getTime())},r=null,R(),i=`summary`,I={year:t().getFullYear(),month:t().getMonth()}):(P=n,N=`Couldn't save your workout. Is this a private browsing window?`)}function it(e,t){return Ce(e)?(F={message:t,undo:{log:P}},P=e,!0):(F={message:`Couldn't save the change. Is this a private browsing window?`},!1)}function at(e){if(me(e.inputs)){y=`Some sets (in red) don't look right. Reps must be 1–100 and weight 0–2000 lb.`;return}let t=P[e.index],n=t.exercises.map((t,n)=>({name:t.name,sets:ue(e.inputs[n])})).filter(e=>e.sets.length>0);it(P.map((t,r)=>r===e.index?{...t,exercises:n}:t),`${v[t.day]} day workout updated.`)&&(_=null)}function ot(e){let t=P[e];z(!0,`Delete the ${v[t.day]} day workout from ${Z(t.date)}? Its sets will be removed from your history.`,`Delete`,()=>{it(P.filter((t,n)=>n!==e),`${v[t.day]} day workout deleted.`),_=null})}function st(e){let t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=e.name,n.click(),window.setTimeout(()=>URL.revokeObjectURL(t),1e3)}async function ct(){let e=A(t()),n=JSON.stringify(je(P,[...M],t(),a,o),null,2),r=new File([n],Me(e),{type:`application/json`});try{(window.matchMedia?.(`(pointer: coarse)`)?.matches??!1)&&navigator.canShare?.({files:[r]})?await navigator.share({files:[r],title:`PPL backup`}):st(r)}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;F={message:`Couldn't save the backup. Please try again.`},G();return}S=e,Ae(e),F={message:`Backup saved with ${P.length} workout${P.length===1?``:`s`}. Keep the file somewhere safe.`},G()}async function q(e){let t=Ne(await e.text());if(t===null)F={message:`That file isn't a PPL backup. Pick a file named like ppl-backup-2026-10-21.json.`};else{let{log:e,added:r}=Pe(P,t.log),{entries:i,added:s}=re(a,t.food);s>0&&f(i)&&(a=i);let c=[r>0?`${r} workout${r===1?``:`s`}`:``,s>0?`${s} food entr${s===1?`y`:`ies`}`:``].filter(Boolean),l=`Restored ${c.join(` and `)} from the backup.`;c.length===0?F={message:`Everything in that backup is already on this device.`}:r>0?it(e,l):F={message:l},t.goals&&o.calories===n.calories&&o.protein===n.protein&&p(t.goals)&&(o=t.goals),M.size===0&&t.missingEquipment.length>0&&(M=new Set(t.missingEquipment),De([...M]))}G()}function J(e){let t=[...a,{id:m(),date:s,...e}];return f(t)?(a=t,l=null,F={message:`Added ${B(e.name)}: ${e.calories} kcal, ${e.protein} g protein.`},!0):(l=`Couldn't save. Is this a private browsing window?`,!1)}function Y(e){let t=a.find(t=>t.id===e);if(!t)return;let n=a.filter(t=>t.id!==e);f(n)&&(F={message:`Removed ${B(t.name)}.`,undoFood:a},a=n)}function lt(e,n){switch(e){case`home`:i=`home`,E=null,_=null,F=null;break;case`edit-workout`:_={index:n,inputs:We(P[n])},y=null,F=null;break;case`cancel-edit`:_=null;break;case`save-edit`:_&&at(_);break;case`delete-workout`:ot(n);break;case`export-backup`:ct();break;case`progress`:i=`progress`,E=null,F=null;break;case`back`:i=D,E=null;break;case`settings`:i=`settings`,F=null;break;case`intro-done`:u=!1,et();break;case`show-intro`:u=!0;break;case`food`:i=`food`,s=A(t()),l=null,F=null;break;case`food-prev-day`:case`food-next-day`:{let[n,r,i]=s.split(`-`).map(Number),a=A(new Date(n,r-1,i+(e===`food-prev-day`?-1:1)));s=a>A(t())?s:a,F=null;break}case`resume`:i=`workout`,F=null;break;case`shuffle`:if(r){let{day:e,abs:t,taken:n,startedAt:i}=r;Fe(()=>Le(e,t,n,i))}O=null;break;case`add-abs`:r&&ze(r);break;case`remove-abs`:r&&Be(r);break;case`finish`:r&&K(r);break;case`summary-done`:i=`home`,T=null;break;case`undo`:F?.undoFood&&f(F.undoFood)&&(a=F.undoFood),F?.undo&&Ce(F.undo.log)&&(P=F.undo.log,F.undo.draft&&(r=F.undo.draft,R(),i=`workout`)),F=null,T=null;break;case`next-quote`:be=(be+1)%Dt.length;break;case`prev-month`:case`next-month`:I=Ue(I.year,I.month,e===`prev-month`?-1:1)}}let ut=()=>[i,i===`workout`?r?.day:``,g,E].join(`|`);function X(e){ut()!==e&&window.scrollTo({top:0})}function dt(e){let t=e.closest(`[data-confirm]`)?.dataset.confirm;if(t===void 0&&e.closest(`.confirm-sheet`))return;let n=ut(),r=t===`yes`?w?.onConfirm:void 0;w=null,r?.(),G(),X(n)}e.addEventListener(`keydown`,e=>{if(e.key===`Escape`){if(w)w=null;else if(u)u=!1,et();else return;G()}}),e.addEventListener(`click`,t=>{if(w){dt(t.target);return}let n=t.target.closest(`button`);if(!n)return;if(n.dataset.jump!==void 0){e.querySelector(`#exercise-${n.dataset.jump}`)?.scrollIntoView({behavior:`smooth`,block:`start`});return}let o=ut(),{day:s,action:c,toggle:l,choose:u,taken:d,history:f,date:ee,index:p,muscles:m,foodAgain:te,foodDelete:h}=n.dataset;if(N=null,j=null,s){let e=s,t=()=>{r?.day!==e&&Le(e),i=`workout`,O=null,F=null};r?.day===e?t():Fe(t)}else if(ee)i=`day`,g=ee,_=null,F=null;else if(f)D=i===`workout`?`workout`:`progress`,E=f,i=`progress`;else if(d!==void 0&&r)Re(r,Number(d)),O=null;else if(te!==void 0){let e=ne(a)[Number(te)];e&&J(e)}else if(h!==void 0)Y(h);else if(m!==void 0){let e=Number(m);k.has(e)?k.delete(e):k.add(e)}else if(l!==void 0)O=O===Number(l)?null:Number(l);else if(u!==void 0&&r){let[e,t]=u.split(`:`).map(Number);r.workout[e]!==t&&(r.workout=ve(r.workout,e,t),r.sets[e]=ce($(r),e,t),R()),O=null}else if(c)lt(c,Number(p));else return;G(),X(o)}),e.addEventListener(`change`,e=>{let t=e.target;if(!t.dataset.set||!r)return;let[n,,i]=t.dataset.set.split(`:`);if(i!==`reps`||x(t.value)===null)return;let a=ye($(r),r.workout)[Number(n)];xe.start(kt(a))}),e.addEventListener(`change`,e=>{let t=e.target;t.dataset.restore!==void 0&&t.files?.[0]&&(q(t.files[0]),t.value=``)}),e.addEventListener(`change`,e=>{let t=e.target,n=t.dataset.equipment;n&&(t.checked?M.delete(n):M.add(n),De([...M])||(M=new Set(Ee()),window.alert(`Couldn't save. Is this a private browsing window?`)),G())}),e.addEventListener(`submit`,e=>{e.preventDefault();let t=e.target,n=Object.fromEntries(new FormData(t));if(t.dataset.foodForm!==void 0){let e=te({name:n.name??``,calories:n.calories??``,protein:n.protein??``});`error`in e?l=e.error:J(e)&&(c={name:``,calories:``,protein:``})}else if(t.dataset.goalsForm!==void 0){let e=h(n.calories??``,n.protein??``);`error`in e?F={message:e.error}:p(e)&&(o=e,F={message:`Daily goals saved.`})}G()}),e.addEventListener(`input`,e=>{let t=e.target;t.form?.dataset.foodForm!==void 0&&(c={...c,[t.name]:t.value})}),e.addEventListener(`input`,e=>{let t=e.target;if(!t.dataset.edit||!_)return;let[n,r,i]=t.dataset.edit.split(`:`),a=_.inputs[Number(n)][Number(r)];a[i]=t.value,t.closest(`.set-row`).className=pe(a)}),e.addEventListener(`input`,t=>{let n=t.target;if(!n.dataset.set||!r)return;let[i,a,o]=n.dataset.set.split(`:`),s=r.sets[Number(i)][Number(a)];s[o]=n.value,R(),n.closest(`.set-row`).className=pe(s);let c=e.querySelector(`[data-plates="${i}"]`);if(c&&o===`weight`){let e=se(c.dataset.fallback??``);c.innerHTML=Jt(qt(r.sets[Number(i)],e))}e.querySelector(`.finish-count`).textContent=`· ${Q(C(r.sets))}`;let l=e.querySelector(`[data-jump="${i}"]`);l&&(l.className=Kt(r.sets[Number(i)]))}),G()}Yt(document.querySelector(`#app`)),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});