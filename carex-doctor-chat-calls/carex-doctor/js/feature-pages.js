// Interaction helpers for feature pages. These validate form input locally only;
// they intentionally do not simulate a successful API/database transaction.
(function(){
  const byId = id => document.getElementById(id);
  function status(id, message){ const el=byId(id); if(el) el.textContent=message; }
  const connect=byId('connectForm');
  if(connect) connect.addEventListener('submit', e=>{
    e.preventDefault();
    const id=(byId('patientId').value||'').trim();
    if(!/^[A-Za-z0-9_-]{4,40}$/.test(id)){status('connectResult','Enter a valid Patient User ID (4–40 letters, numbers, _ or -).');return;}
    status('connectResult','Input looks valid, but no request was sent: the project has no configured connection API/database.');
  });
  const claim=byId('claimForm');
  if(claim) claim.addEventListener('submit', e=>{
    e.preventDefault(); const n=Number(byId('claimAmount').value);
    status('claimResult',Number.isSafeInteger(n)&&n>0?'Input looks valid, but no claim was created. Available balance must be verified by the server.':'Enter a positive whole-token amount.');
  });
  const payout=byId('payoutForm');
  if(payout) payout.addEventListener('submit', e=>{
    e.preventDefault(); const n=Number(byId('payoutAmount').value);
    if(!Number.isSafeInteger(n)||n<=0){status('payoutResult','Enter a positive whole-token amount.');return;}
    if(!byId('payoutMethod').value||!byId('payoutDestination').value.trim()){status('payoutResult','Complete all required fields.');return;}
    status('payoutResult','Form validated locally only. No payout request was sent; configure a secure backend before entering real payment details.');
  });
  ['audioCall','videoCall'].forEach(id=>{const b=byId(id);if(b)b.addEventListener('click',()=>{
    const patient=(byId('callPatientId').value||'').trim();
    status('callResult',patient?'Calling is not configured yet. No call was placed.':'Enter a Patient User ID first.');
  });});
  const search=byId('conversationSearch');
  if(search) search.addEventListener('input',()=>{ /* conversation list will be wired to API */ });
})();
