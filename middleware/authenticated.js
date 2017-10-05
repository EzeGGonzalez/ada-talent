export default function ({ store, redirect }) {
  if (!store.state.session.user) {
    return redirect('/users/login')
  }
}
