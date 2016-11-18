export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('edit'),
    this.use('crossFade', {duration: 2000})
  );
  this.transition(
    this.fromRoute('edit'),
    this.toRoute('index'),
    this.use('toUp', {duration: 2000})
  );
}
