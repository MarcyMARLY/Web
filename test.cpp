#include <iostream>
#include <cstdio>
#include <cmath>
#include <algorithm>
#include <vector>
#include <map>
#include <set>
#include <bitset>
#include <queue>
#include <stack>
#include <string>
#include <ctime>
#include <stdio.h>
#include <string.h>

using namespace std;

#define re return
#define fi first
#define se second
#define mp make_pair
#define pb push_back
#define all(x) (x).begin(), (x).end()
#define sz(x) ((int) (x).size())
#define rep(i, n) for (int i = 0; i < (n); i++)
#define repm(i, n) for (int i = 1; i <= (n); i++)
#define rrep(i, n) for (int i = (n) - 1; i >= 0; i--)
#define vi vector<int>
#define vl vector<long>
#define vll vector<ll>
#define vvi vector<vi>
#define pii pair<int,int>
#define vpii vector< pair<int,int> >
#define ll long long
#define ld long double
#define str string

// freopen("firesafe.in", "r", stdin);
// freopen("firesafe.out", "w", stdout);
//ll dp[33][33];
//map<ll,ll>mmap;
int n,q;

long long maxn[4*100000+1],minn[4*100000+1];
void build(long long a[], long long v, int l, int r){
  if(l==r){
    maxn[v] = a[l];
    minn[v] = a[l];
  }else{
    int mid = (l+r)>>1;
    build(a, v+v,l,mid);
    build(a, v+v+1, mid+1, r);
    maxn[v] = max(maxn[v+v], maxn[v+v+1]);
    minn[v] = min(minn[v+v],minn[v+v+1]);
  }
}
/*long long sum(int v,int l, int r, int L, int R){
//  printf("%d %d %d %d %d \n", v, l, r, L, R);
  if(L>R) return 0;
  if(l==L && r==R) return t[v];
  int mid = (l+r)>>1;
  return sum(v+v,l,mid,L,min(mid,R)) + sum(v+v+1, mid+1, r , max(mid+1,L), R );
}*/
long long MAX(long long v, int l, int r, int L, int R){
  if(L>R) return -n-1;
  if(l==L&&r==R) return maxn[v];
  int mid = (l+r)>>1;
  return max(MAX(v+v, l , mid, L, min(mid,R)),MAX(v+v+1, mid+1, r, max(mid+1,L),R));
}
long long MIN(long long v, int l, int r, int L, int R){
  if(L>R) return n+1;
  if(l==L&&r==R) return minn[v];
  int mid = (l+r)>>1;
  return min(MIN(v+v, l , mid, L, min(mid,R)),MIN(v+v+1, mid+1, r, max(mid+1,L),R));
}
void update(long long v, int l, int r, int pos, int val){

  if(l==r) {

    minn[v] = val;
    maxn[v] = val;

  }
  else{
    int mid = (l+r)>>1;
    if(pos<=mid){
      update(v+v,l,mid, pos,val);
    }else{
      update(v+v+1,mid+1, r, pos, val);
    }
    maxn[v] = max(maxn[v+v], maxn[v+v+1]);
    minn[v] = min(minn[v+v], minn[v+v+1]);
  }



}

ll mulmod(ll a, ll b, ll mod)
{
    ll res = 0;
    a = a % mod;
    while (b > 0)
    {
        if (b % 2 == 1)
            res = (res + a) % mod;
        a = (a * 2) % mod;
        b /= 2;
    }
    return res % mod;
}

int main(){
   freopen("rvq.in", "r", stdin);
   freopen("rzq.out", "w", stdout);
  cin>>q;
  n = 100001;
  long long a[n+1];
  repm(i,n){
    a[i]=mulmod(i,i,12345) + mulmod(1ll*i*i,i,23456);
  }
  build(a,1,1, n);

  rep(i,q){
    int x, y;
    cin>>x>>y;
    if(x>0){
      cout<<MAX(1,1,n,x,y) -MIN(1,1,n,x,y)<<endl;
    }
    if(x<0){
      update(1,1,n,abs(x),y);
    }
  }


}
