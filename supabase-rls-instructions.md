# Fixing Row-Level Security (RLS) Issue for Waitlist

## Step 1: Log into Supabase Dashboard
Go to https://app.supabase.com/ and select your project.

## Step 2: Navigate to Table Policies
1. Go to "Authentication" section in the left sidebar
2. Click on "Policies"
3. Find your "waitlist" table

## Step 3: Create/Modify Insert Policy
1. Click "New Policy" (or edit existing policy)
2. Choose "Insert" operation
3. Set policy name to something like "Allow anonymous waitlist entries"
4. Use this policy definition:

```sql
true
```

Or for more security:

```sql
auth.role() = 'anon'
```

5. In "WITH CHECK" expression (which controls what rows can be inserted), use:

```sql
auth.role() = 'anon' AND 
status = 'pending' AND 
email IS NOT NULL AND 
full_name IS NOT NULL
```

This allows only anonymous users to insert rows where:
- The status is always 'pending'
- Email and full_name are required
- Other fields can be null

## Step 4: Save Policy
Click "Save Policy" to apply these changes.

## Alternative Approach
If you can't modify the RLS policy, you'll need to create a server-side function with service role access to bypass RLS completely.
