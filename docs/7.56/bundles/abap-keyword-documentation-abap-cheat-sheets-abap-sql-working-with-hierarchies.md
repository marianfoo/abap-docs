# ABAP - Keyword Documentation / ABAP - Cheat Sheets / ABAP SQL: Working with Hierarchies

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapsheet_abap_sql_hierarchies.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm)
- [abensheet_abap_sql_hiera_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_hiera_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.437Z

---

### abapsheet_abap_sql_hierarchies.htm

> **📖 Official SAP Documentation**: [abapsheet_abap_sql_hierarchies.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) → 

ABAP SQL: Working with Hierarchies

This cheat sheet summarizes the possibilities, ABAP SQL offers together with ABAP CDS for working with [hierarchical data](javascript:call_link\('abenhierarchy_glosry.htm'\) "Glossary Entry") that are stored in database tables. Hierarchical data in database tables means, that lines of one or more database tables are connected by [parent-child relationships](javascript:call_link\('abenpcr_glosry.htm'\) "Glossary Entry"). There are many use cases, where hierarchical data play a role and where accessing information about the hierarchical relationship is important. For example, a common task can be to find out the descendants or ancestors of a given hierarchy node or to aggregate values of subtrees.

-   [Overview](#abapsheet-abap-sql-hierarchies-1-------sql-hierarchies---@ITOC@@ABAPSHEET_ABAP_SQL_HIERARCHIES_2)
-   [Creating SQL Hierarchies](#abapsheet-abap-sql-hierarchies-3-----------abap-cds-hierarchies---@ITOC@@ABAPSHEET_ABAP_SQL_HIERARCHIES_4)
    -   [ABAP SQL Hierarchy Generator HIERARCHY](#abapsheet-abap-sql-hierarchies-5-----------abap-cte-hierarchies---@ITOC@@ABAPSHEET_ABAP_SQL_HIERARCHIES_6)
-   [Hierarchy Navigators](#abapsheet-abap-sql-hierarchies-7-----------hierarchy-node-navigator-hierarchy--descendants---@ITOC@@ABAPSHEET_ABAP_SQL_HIERARCHIES_8)
    -   [Hierarchy Node Navigator HIERARCHY\_ANCESTORS](#abapsheet-abap-sql-hierarchies-9-----------hierarchy-node-navigator-hierarchy--siblings---@ITOC@@ABAPSHEET_ABAP_SQL_HIERARCHIES_10)
    -   [Hierarchy Aggregate Navigators](#abapsheet-abap-sql-hierarchies-11---overview--in-former-times-you-had-to-load-the-data-from-the-database-into-internal-tables-and-program-it-all-by-yourself--if-you-did-not-find-an-appropriate-api---in-between---meshes--javascript-call-link---abenmesh-glosry-htm-----glossary-entry---offered-some-features-for-working-with-hierarchies--as-shown-in-this--example--javascript-call-link---abenmesh-for-reflex-sngl-abexa-htm------but-have-not-found-wide-distribution---meanwhile--the-standard-as-abap-database-is-a-sap-hana-database-that-offers-a-lot-of-helpful-features--among-others--you-find-a-set-of-hierarchy-functions-there--that-allow-you-to-deal-with-hierarchical-data-directly-on-the-database-and-that-you-can-look-up-in-the--sap-hana-documentation--https---help-sap-com-viewer-4fe29514fd584807ac9f2a04f6754767-2-0-04-en-us-b4b0eec1968f41a099c828a4a6c8ca0f-html---now-you-might-expect-that-you-must-use--amdp--javascript-call-link---abenamdp-htm-----in-order-to-access-these-functions-from-your-abap-programs--but-no-need-to-do-so--abap-sql-and-abap-cds-support-hierarchies-directly-by-wrapping-the-hana-built-in-functions-without-any-loss-of-performance--you-can-stay-in-the-comfortable-abap-world-and-nevertheless-have-access-to-most-modern-features--all-you-have-to-do--is-to-understand-some-concepts-and-learn-some-additional-syntax-and-then-you-can-start-right-away---sql-hierarchies--with--sql-hierarchy--javascript-call-link---abensql-hierarchy-glosry-htm-----glossary-entry---we-denote-a-special--hierarchical-data-source--javascript-call-link---abenselect-hierarchy-data-htm-----that-you-can-use-in-the-from-clause-of-abap-sql-queries--a-sql-hierarchy-is-a-tabular-set-of-rows-which-form-the-hierarchy-nodes-of-a-hierarchy-and-which-contains-additionally--hierarchy-columns--javascript-call-link---abenhierarchy-column-glosry-htm-----glossary-entry---that-contain-hierarchy-attributes-with-hierarchy-specific-information-for-each-row--for-creating-a-sql-hierarchy--you-need-the-following-------data-source----------this-can-be-any-data-source-you-can-access-normally-in-an-abap-sql-query--as-most-commonly-a-database-table-or-a-cds-view--but-also-a-cte--common-table-expression---the-structure-and-contents-of-the-data-source-should-be-able-to-represent-hierarchical-data-----------parent-child-relation----------a-parent-child-relation-must-be-defined-between-two-or-more-columns-of-the-data-source--from-the-parent-child-relationship-and-the-actual-data-of-the-data-source--the-sql-hierarchy-consisting-of-parent-nodes-and-child-nodes-can-be-created--the-parent-child-relation-must-be-defined-by-a-self-association-which-we-call-hierarchy-association--this-can-be-achieved-with-cds-associations-or-cte-associations--a-data-source-exposing-a-hierarchy-association-can-be-used-as-a-hierarchy-source-for-creating-a-sql-hierarchy-----------hierarchy-creation----------from-a-hierarchy-source--that-is-a-data-source-exposing-a-hierarchy-association--a-sql-hierarchy-can-be-created--this-can-be-done-either-by-defining-a-cds-hierarchy-outside-an-abap-program-or-with-the-hierarchy-generator-of-abap-sql-directly-in-the-from-clause-of-an-abap-sql-query-inside-an-abap-program--------the-following-topics-show-you-step-by-step-how-sql-hierarchies-can-be-created-and-accessed---creating-sql-hierarchies--abap-cds-hierarchies--with--cds-hierarchies--javascript-call-link---abenhierarchy-column-glosry-htm-----glossary-entry----you-outsource-the-hierarchy-data-source-and-the-creation-of-the-sql-hierarchy-from-your-abap-program-to-abap-cds--there-the-hierarchy-is-a-fully-fledged-cds-entity--it-s-reusable-in-different-programs-or-in-other-cds-entities--views--and-can-be-part-of-your-data-model-including-access-control-using-cds-dcl--for-a-cds-hierarchy--the-hierarchy-source-cannot-be-anything-else-but-a-cds-view-that-exposes-a--hierarchy-association--javascript-call-link---abenhierarchy-association-glosry-htm-----glossary-entry----here-is-a-very-simple-example-for-that---AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SIMPLE\_TREE\_VIEW
  as select from demo\_simple\_tree
  association \[1..1\] to DEMO\_CDS\_SIMPLE\_TREE\_VIEW as \_tree  
    on $projection.parent = \_tree.id
{
      \_tree,
  key id,
      parent\_id as parent,
      name
}

This CDS view entity accesses the database table DEMO\_SIMPLE\_TREE ,where the actual data reside, and exposes a [self-association](javascript:call_link\('abenself_association_glosry.htm'\) "Glossary Entry") \_tree. The ON\-condition of the association defines a parent-child relation between the elements id and parent. It simply means that a row of the result set, where column parent has the same value as column id of another row is a child of the latter in the hierarchy that is constructed from that view. The CDS view exposes also another column name of the database table that represents the remaining data contents. Note, that you can define such CDS views for any available data sources and that the ON\-condition can be more complex than shown in the simple example here.

Now we can use the above CDS view as the hierarchy source of a CDS hierarchy that can be defined as follows:

define hierarchy DEMO\_CDS\_SIMPLE\_TREE
  with parameters
    p\_id : abap.int4
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = :p\_id
      siblings order by
        id ascending
    )
    {
      id,
      parent,
      name
    }

The CDS DDL statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) that can be used in the DDL source code editor of ADT defines a CDS hierarchy as a CDS entity that can be accessed in CDS views or ABAP SQL as a SQL hierarchy. The most important additions of the statement are:

-   SOURCE for specifying the hierarchy source, here our DEMO\_CDS\_SIMPLE\_TREE\_VIEW.
-   CHILD TO PARENT ASSOCIATION for specifying the hierarchy association, here \_tree.
-   START WHERE for defining the root nodes of the SQL hierarchy, here represented by an input parameter p\_id that must be passed when accessing the CDS hierarchy.
-   SIBLINGS ORDER BY to define also a sort order for sibling nodes besides the sort order that comes from the parent-child relationship anyhow.
-   An element list { ... } that defines the columns of the SQL hierarchy, here simply all elements of the hierarchy source.

For a full description and all other additions see [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)).

When you access the CDS hierarchy, all lines are selected from the original data source, in our case the database table DEMO\_SIMPLE\_TREE, that fulfill the START WHERE condition. Those make up the root node set of the SQL hierarchy. In the simplest case we have exactly one root node, but more are possible. Then, for each root node, its descendants are retrieved. That means each line from the database table that fulfills the ON\-condition of the hierarchy association is added to the SQL hierarchy. And for each descendant this is done again and again until all descendants are found. And that is basically all! Further additions to DEFINE HIERARCHY allow you to control the creation of the SQL hierarchy, for example, whether multiple parents are allowed or how orphans or cycles should be handled.

Besides the elements of the hierarchy, the element list can also contain the hierarchy attributes listed under [Hierarchy Attributes](javascript:call_link\('abencds_hierarchy_attributes.htm'\)). Then the SQL hierarchy is enriched with columns containing information about the role, the current line plays as a hierarchy node, as, for example, the hierarchy rank or the hierarchy level. In our example, we did not add such elements, because ABAP SQL does that implicitly for you when accessing the CDS hierarchy!

The SQL hierarchy can be used in an ABAP SQL query by using the CDS hierarchy directly as a data source of the FROM clause:

DATA root\_id type demo\_cds\_simple\_tree\_view-id.
...
SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
       FIELDS id,
              parent,
              name,
              hierarchy\_rank,
              hierarchy\_tree\_size,
              hierarchy\_parent\_rank,
              hierarchy\_level,
              hierarchy\_is\_cycle,
              hierarchy\_is\_orphan,
              node\_id,
              parent\_id
           INTO TABLE @DATA(cds\_result).

And although we did not define any hierarchy attributes in the element list of the CDS hierarchy, we can add all the hierarchy columns listed under [Hierarchy Columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) to the SELECT list of our ABAP SQL statement! This is always possible, when a SQL hierarchy is accessed in ABAP SQL. We can pass any ID to the CDS hierarchy now and see what happens. If such a line is found in the database table, the respective hierarchical data will be retrieved and delivered. Execute program DEMO\_SQL\_HIERACHIES for filling the database table with randomly generated data and inspect the tabular result. As expected, all elements of the SELECT list appear as columns. Note, that the contents of column NAME could be anything. It is filled here with a string representation of the path from the root node to the current node for demonstration purposes only.

From the ABAP coding point of view, CDS hierarchies are the most convenient way of using SQL hierarchies. Now let us turn to other ways, involving more ABAP, until we do not use any CDS more in the end.

ABAP SQL Hierarchy Generator HIERARCHY

The ABAP SQL [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") is a ABAP SQL function named [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)), that allows you to define a SQL hierarchy in the ABAP program itself. Let us look directly at an example:

DATA root\_id TYPE demo\_cds\_simple\_tree\_view-id.
...
SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_view
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = @root\_id
                       SIBLINGS ORDER BY id
                       MULTIPLE PARENTS NOT ALLOWED ) "hierarchy
       FIELDS id,
              parent,
              name,
              hierarchy\_rank,
              hierarchy\_tree\_size,
              hierarchy\_parent\_rank,
              hierarchy\_level,
              hierarchy\_is\_cycle,
              hierarchy\_is\_orphan,
              node\_id,
              parent\_id
       INTO TABLE @DATA(asql\_cds\_result).

ASSERT asql\_cds\_result = cds\_result.

Looks familiar? Well, almost the same syntax used for defining the CDS hierarchy is used in the brackets HIERARCHY( ... ) and it does exactly the same! The difference is the same as it is between ABAP SQL joins and joins in CDS views:

-   If you code it in ABAP SQL, it is for usage in one program only.
-   If you code it in ABAP CDS, it is for usage in many programs or whole data models.

And, as you can see, we dare to prove this with an ASSERT statement. Please also note, that we use the hierarchy columns again. They are implicitly there, when a SQL hierarchy, here created by the hierarchy generator, is accessed.

The above hierarchy generator of ABAP SQL accesses the same hierarchy source as the CDS hierarchy, namely the CDS view DEMO\_CDS\_SIMPLE\_TREE\_VIEW that exposes the necessary hierarchy association \_tree. In the following code snippet, we replace the CDS hierarchy source with a CTE:

DATA root\_id type demo\_cds\_simple\_tree\_view-id.
...
WITH
  +cte\_simple\_tree\_source AS
     ( SELECT FROM demo\_simple\_tree
              FIELDS id,
                     parent\_id AS parent,
                     name )
        WITH ASSOCIATIONS (
          JOIN TO MANY +cte\_simple\_tree\_source AS \_tree
            ON +cte\_simple\_tree\_source~parent = \_tree~id )
  SELECT FROM HIERARCHY( SOURCE +cte\_simple\_tree\_source
                         CHILD TO PARENT ASSOCIATION \_tree
                         START WHERE id = @root\_id
                         SIBLINGS ORDER BY id
                         MULTIPLE PARENTS NOT ALLOWED ) "hierarchy
         FIELDS id,
                parent,
                name,
                hierarchy\_rank,
                hierarchy\_tree\_size,
                hierarchy\_parent\_rank,
                hierarchy\_level,
                hierarchy\_is\_cycle,
                hierarchy\_is\_orphan,
                node\_id,
                parent\_id
         INTO TABLE @DATA(asql\_cte\_result).

ASSERT asql\_cte\_result = cds\_result.

Common table expressions (CTEs) are a very powerful tool for defining subqueries that can be used in subsequent queries of the same [WITH](javascript:call_link\('abapwith.htm'\)) statement. They can be regarded as an ABAP SQL internal definition of data sources that fulfill the same functionality as program external data sources, especially CDS views. As you see above, the CTE cte\_simple\_tree\_source does the same as the CDS view DEMO\_CDS\_SIMPLE\_TREE\_VIEW:

-   It accesses the database table DEMO\_SIMPLE\_TREE.
-   It exposes an association \_tree by using the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)).

The main query of the WITH statement uses the hierarchy generator in the same way as the SELECT above, just with the CTE as a data source instead of the CDS view and the result is - of course - the same,

For a full description of the hierarchy generator and all other additions see [SELECT, FROM HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)).

We managed to create a SQL hierarchy with ABAP SQL means only. Last but not least we will use CTEs as hierarchies themselves. You might skip the following section and turn directly to the hierarchy navigators if you are not too interested in this syntactic gimmicks.

ABAP CTE Hierarchies

A CTE that produces hierarchical data can declare itself as a SQL hierarchy of a freely defined name with the addition [WITH HIERARCHY](javascript:call_link\('abapwith_hierarchy.htm'\)). That simply means that subsequent queries of the same WITH statement can use the CTE as a hierarchy with its implicit hierarchy columns or - more important - in hierarchy navigators.

The following code snippets show the three possibilities, how a CTE can produce hierarchical data:

DATA root\_id TYPE demo\_cds\_simple\_tree\_view-id.
...
WITH
      +tree AS
        ( SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
                 FIELDS \* )
          WITH HIERARCHY demo\_cds\_simple\_tree
      SELECT FROM  +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_cds\_result).
...
WITH
      +tree AS
        ( SELECT FROM HIERARCHY(
            SOURCE demo\_cds\_simple\_tree\_view
            CHILD TO PARENT ASSOCIATION \_tree
            START WHERE id = @root\_id
            SIBLINGS ORDER BY id
            MULTIPLE PARENTS NOT ALLOWED ) AS asql\_hierarchy
            FIELDS id,
                   parent,
                   name )
          WITH HIERARCHY asql\_hierarchy
      SELECT FROM +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_asql\_result).
...
WITH
      +cte\_simple\_tree\_source AS
        ( SELECT FROM demo\_simple\_tree
                 FIELDS id,
                        parent\_id AS parent,
                        name )
           WITH ASSOCIATIONS (
             JOIN TO MANY +cte\_simple\_tree\_source AS \_tree
               ON +cte\_simple\_tree\_source~parent = \_tree~id ),
      +tree AS
        ( SELECT FROM HIERARCHY(
            SOURCE +cte\_simple\_tree\_source
            CHILD TO PARENT ASSOCIATION \_tree
            START WHERE id = @root\_id
            SIBLINGS ORDER BY id
            MULTIPLE PARENTS NOT ALLOWED ) AS cte\_hierarchy
            FIELDS id,
                   parent,
                   name  )
            WITH HIERARCHY cte\_hierarchy
      SELECT FROM +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_cte\_result).

ASSERT cte\_cds\_result  = cds\_result.
ASSERT cte\_asql\_result = cds\_result.
ASSERT cte\_cte\_result  = cds\_result.

A CTE that is exposed as a SQL hierarchy must access a SQL hierarchy itself and in the end these are always based on a CDS hierarchy or the ABAP SQL hierarchy generator as shown above. Again, the hierarchy source of the hierarchy generator can be a CDS view or a CTE exposing the hierarchy association. Running DEMO\_SQL\_HIERACHIES shows, that all assertions are fulfilled.

Hierarchy Navigators

[Hierarchy navigators](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") are an additional set of [hierarchy functions](javascript:call_link\('abenhierarchy_function_glosry.htm'\) "Glossary Entry") in ABAP SQL that allow you to work on existing SQL hierarchies instead of creating them. Hierarchy navigators can work on SQL hierarchies created as shown above, namely on CDS hierarchies, the hierarchy generator or a CTE hierarchy. They can be used as data sources in ABAP SQL queries. If you need a SQL hierarchy several times, from a performance point of view it is favorable to create it once with a given set of root nodes and access it with hierarchy navigators then. Furthermore, each hierarchy navigator can add further hierarchy columns to the result set that offer additional possibilities for the evaluation.

In the following examples, we access our CDS hierarchy with hierarchy navigators. But you could also replace it with the hierarchy generator or a CTE hierarchy. Check the examples of the [documentation](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)), where this is also shown.

Hierarchy Node Navigator HIERARCHY\_DESCENDANTS

As the name says, [HIERARCHY\_DESCENDANTS](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) fetches all descendants for any nodes from a SQL hierarchy. It adds HIERARCHY\_DISTANCE as an additional hierarchy column to the result set. Let us look at an example. All examples are code snippets from DEMO\_SQL\_HIERACHIES again.

DATA root\_id TYPE demo\_cds\_simple\_tree\_view-id.
DATA sub\_id TYPE demo\_cds\_simple\_tree\_view-id.
...
SELECT FROM HIERARCHY\_DESCENDANTS(
              SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
              START WHERE id = @sub\_id  )
  FIELDS id,
         parent\_id,
         name,
         hierarchy\_distance
  INTO TABLE @DATA(descendants).

Our CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE\_VIEW is used to create a SQL hierarchy with a start node passed to parameter p\_id and for a node sub\_id all descendants are fetched. Running the program shows the result including the additional column HIERARCHY\_DISTANCE that contains the distance to the respective start node. A further parameter DISTANCE - not shown here - allows you restrict the distance to the respective start node.

Hierarchy Node Navigator HIERARCHY\_ANCESTORS

Now the other way around: ABAP SQL function [HIERARCHY\_ANCESTORS](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) returns the ancestors of any given node of an existing hierarchy:

DATA root\_id TYPE demo\_cds\_simple\_tree\_view-id.
DATA max\_id TYPE demo\_cds\_simple\_tree\_view-id.
...
SELECT FROM HIERARCHY\_ANCESTORS(
              SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
              START WHERE id = @max\_id )
  FIELDS id,
          parent\_id,
          name,
          hierarchy\_distance
  INTO TABLE @DATA(ancestors).

Looking at the result when running DEMO\_SQL\_HIERACHIES, you see that the value of column HIERARCHY\_DISTANCE is negative now. Using aggregate functions or evaluating the internal result table, you can now easily extract further information like the number of ancestors and so on.

Hierarchy Node Navigator HIERARCHY\_SIBLINGS

Besides descendants and ancestors, hierarchy nodes also can have siblings, that is nodes that have the same parent node. You can find these by looking for all nodes with the same value in hierarchy column HIERARCHY\_PARENT\_RANK. But there is also [HIERARCHY\_SIBLINGS](javascript:call_link\('abenselect_hierarchy_node_navis.htm'\)) as a hierarchy function for that:

DATA root\_id TYPE demo\_cds\_simple\_tree\_view-id.
DATA sibl\_id TYPE demo\_cds\_simple\_tree\_view-id.
...
SELECT FROM HIERARCHY\_SIBLINGS(
              SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
              START WHERE id = @sibl\_id )
  FIELDS id,
          parent\_id,
          name,
          hierarchy\_sibling\_distance
  INTO TABLE @DATA(siblings).

You see, that this function adds another hierarchy column HIERARCHY\_SIBLING\_DISTANCE that contains the distance to the respective start node. Running DEMO\_SQL\_HIERACHIES, where we start with a node that for sure has some siblings, shows the result.

Hierarchy Aggregate Navigators

Finally let us turn to the [hierarchy aggregate navigators](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") that allow you to apply some aggregate functions to descendants and ancestors of any node of a SQL hierarchy:

-   [HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\))
-   [HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\))

We will show an example for the descendants case and refer to the [documentation](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\)) for the ancestors.

Applying aggregate functions to columns normally means, that you have some data there for which that makes sense. In our simplistic SQL hierarchy tree we do not have such meaningful data. On the other hand, this can also be a use case: You can have the administrative data for the parent-child relation in one database table and the real data in another one. And for that use case, the hierarchy aggregate navigator HIERARCHY\_DESCENDANTS\_AGGREGATE offers you the possibility to join such data to your SQL hierarchy:

TYPES:
  BEGIN OF value,
    id     TYPE i,
    amount TYPE p LENGTH 16 DECIMALS 2,
  END OF value.
DATA value\_tab TYPE SORTED TABLE OF value WITH UNIQUE KEY id.
DATA root\_id TYPE demo\_cds\_simple\_tree\_view-id.
DATA sub\_id TYPE demo\_cds\_simple\_tree\_view-id.
...
SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
              SOURCE demo\_cds\_simple\_tree( p\_id = @sub\_id  ) AS h
              JOIN @value\_tab AS v
                ON  v~id = h~id
              MEASURES SUM( v~amount ) AS amount\_sum
              WHERE hierarchy\_rank > 1
              WITH SUBTOTAL
              WITH BALANCE )
  FIELDS id,
         amount\_sum,
         hierarchy\_rank,
         hierarchy\_aggregate\_type
  INTO TABLE @DATA(descendants\_aggregate).

In our example, we join an internal table value\_tab of the same program to the SQL hierarchy. In a real life example you would join another database table, of course. On the other hand the example shows ABAP SQL's capability to use internal tables as data sources. You even can go so far to evaluate hierarchical data in internal tables with ABAP SQL by using an internal table as data source for a CTE hierarchy!

The example does the following:

-   We use the hierarchy aggregate navigator HIERARCHY\_DESCENDANTS\_AGGREGATE as a data source of a FROM clause.
-   Our CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE\_VIEW joined with internal table value\_tab is used as the data source.
-   The ABAP SQL function returns a tabular result of nodes of the data source.
-   The aggregate function SUM behind MEASURES sums up the values of column amount of the joined internal table for all descendants of each node returned by the ABAP SQL function.
-   The WHERE condition restricts the result set by a freely programmable condition.
-   The WITH additions add further rows to the result set that can be recognized by values in an additional hierarchy column HIERARCHY\_AGGREGATE\_TYPE:
    
    -   WITH SUBTOTAL
        
        In the row where HIERARCHY\_AGGREGATE\_TYPE has value 1, column AMOUNT\_SUM contains the sum of the values of all hierarchy nodes that meet the WHERE condition.
        
    -   WITH BALANCE
        
        In the row where HIERARCHY\_AGGREGATE\_TYPE has value 2, column AMOUNT\_SUM contains the sum of the values of all hierarchy nodes that do not meet the WHERE condition.
        
    
    For more WITH additions see the [documentation](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\)),
    

Running DEMO\_SQL\_HIERACHIES shows the result. It also shows the result of the joined data source, where you can check that the calculated values are correct.

Executable Example

[Working with Hierarchies](javascript:call_link\('abensheet_abap_sql_hiera_abexa.htm'\))

For the complete reference documentation about SQL hierarchies, see [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)).

Continue
![Example](exa.gif "Example") [ABAP SQL - Working with Hierarchies](javascript:call_link\('abensheet_abap_sql_hiera_abexa.htm'\))



**📖 Source**: [abapsheet_abap_sql_hierarchies.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm)

### abensheet_abap_sql_hiera_abexa.htm

> **📖 Official SAP Documentation**: [abensheet_abap_sql_hiera_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_hiera_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abensheet_abap_sql_hiera_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_hiera_abexa.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) →  [ABAP SQL: Working with Hierarchies](javascript:call_link\('abapsheet_abap_sql_hierarchies.htm'\)) → 

ABAP SQL - Working with Hierarchies

This example is the basis for the code snippets shown under [Working with Hierarchies](javascript:call_link\('abapsheet_abap_sql_hierarchies.htm'\)).

Source Code

REPORT demo\_sql\_hierachies.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF value,
        id     TYPE i,
        amount TYPE p LENGTH 16 DECIMALS 2,
      END OF value.
    CLASS-DATA
      value\_tab TYPE SORTED TABLE OF value WITH UNIQUE KEY id.
    CLASS-DATA
      rnd TYPE REF TO cl\_abap\_random\_int.
    CLASS-METHODS:
      fill\_table,
      get\_root\_id RETURNING VALUE(root\_id) TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    fill\_table( ).
    DATA(root\_id) =  get\_root\_id( ) / 10 + 1.
    out->begin\_section( \`SQL Hierarchies in ABAP SQL\`
      )->begin\_section( \`CDS Artefacts\`
      )->begin\_section( \`CDS Source\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_ddls\_source\_code\_html(
                      source = 'DEMO\_CDS\_SIMPLE\_TREE\_VIEW' )
      )->next\_section( \`CDS Hierarchy\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_ddls\_source\_code\_html(
                      source = 'DEMO\_CDS\_SIMPLE\_TREE' )
      )->end\_section( )->end\_section(
      )->begin\_section( \`Hierarchies as Data Source in the FROM clause\`
      )->begin\_section( \`Using a CDS Hierarchy\`
      )->begin\_code( \`cds\` ).
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id ) "hierarchy
           FIELDS id,
                  parent,
                  name,
                  hierarchy\_rank,
                  hierarchy\_tree\_size,
                  hierarchy\_parent\_rank,
                  hierarchy\_level,
                  hierarchy\_is\_cycle,
                  hierarchy\_is\_orphan,
                  node\_id,
                  parent\_id
           INTO TABLE @DATA(cds\_result). "#EC CI\_NOWHERE
    out->end\_code( \`cds\`
       )->write( cds\_result ).
    IF lines( cds\_result ) < 10 OR lines( cds\_result ) > 20.
      SUBMIT (sy-repid).
    ENDIF.
    out->next\_section( \`Using the Hierarchy Generator\`
      )->begin\_section( \`Source CDS View\`
      )->begin\_code( \`asql\_cds\` ).
    SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_view
                           CHILD TO PARENT ASSOCIATION \_tree
                           START WHERE id = @root\_id
                           SIBLINGS ORDER BY id
                           MULTIPLE PARENTS NOT ALLOWED ) "hierarchy
           FIELDS id,
                  parent,
                  name,
                  hierarchy\_rank,
                  hierarchy\_tree\_size,
                  hierarchy\_parent\_rank,
                  hierarchy\_level,
                  hierarchy\_is\_cycle,
                  hierarchy\_is\_orphan,
                  node\_id,
                  parent\_id
           INTO TABLE @DATA(asql\_cds\_result).
    ASSERT asql\_cds\_result = cds\_result.
    out->end\_code( \`asql\_cds\`
      )->next\_section( \`Source CTE\`
      )->begin\_code( \`asql\_cte\` ).
    WITH
      +cte\_simple\_tree\_source AS
         ( SELECT FROM demo\_simple\_tree
                  FIELDS id,
                         parent\_id AS parent,
                         name )
            WITH ASSOCIATIONS (
              JOIN TO MANY +cte\_simple\_tree\_source AS \_tree
                ON +cte\_simple\_tree\_source~parent = \_tree~id )
      SELECT FROM HIERARCHY( SOURCE +cte\_simple\_tree\_source
                             CHILD TO PARENT ASSOCIATION \_tree
                             START WHERE id = @root\_id
                             SIBLINGS ORDER BY id
                             MULTIPLE PARENTS NOT ALLOWED ) "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(asql\_cte\_result).
    ASSERT asql\_cte\_result = cds\_result.
    out->end\_code( \`asql\_cte\`
      )->end\_section(
      )->next\_section( \`Using a CTE Hierarchy\`
      )->begin\_section( \`Source CDS Hierarchy\`
      )->begin\_code( \`cte\_cds\` ).
    WITH
      +tree AS
        ( SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
                 FIELDS \* )
          WITH HIERARCHY demo\_cds\_simple\_tree
      SELECT FROM  +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_cds\_result).
    ASSERT cte\_cds\_result  = cds\_result.
    out->end\_code( \`cte\_cds\`
      )->next\_section( \`Source Hierarchy Generator\`
      )->begin\_code( \`cte\_asql\`  ).
    WITH
      +tree AS
        ( SELECT FROM HIERARCHY(
            SOURCE demo\_cds\_simple\_tree\_view
            CHILD TO PARENT ASSOCIATION \_tree
            START WHERE id = @root\_id
            SIBLINGS ORDER BY id
            MULTIPLE PARENTS NOT ALLOWED ) AS asql\_hierarchy
            FIELDS id,
                   parent,
                   name )
          WITH HIERARCHY asql\_hierarchy
      SELECT FROM +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_asql\_result).
    ASSERT cte\_asql\_result = cds\_result.
    out->end\_code( \`cte\_asql\`
      )->next\_section( \`Source CTE\`
      )->begin\_code( \`cte\_cte\` ).
    WITH
      +cte\_simple\_tree\_source AS
        ( SELECT FROM demo\_simple\_tree
                 FIELDS id,
                        parent\_id AS parent,
                        name )
           WITH ASSOCIATIONS (
             JOIN TO MANY +cte\_simple\_tree\_source AS \_tree
               ON +cte\_simple\_tree\_source~parent = \_tree~id ),
      +tree AS
        ( SELECT FROM HIERARCHY(
            SOURCE +cte\_simple\_tree\_source
            CHILD TO PARENT ASSOCIATION \_tree
            START WHERE id = @root\_id
            SIBLINGS ORDER BY id
            MULTIPLE PARENTS NOT ALLOWED ) AS cte\_hierarchy
            FIELDS id,
                   parent,
                   name  )
            WITH HIERARCHY cte\_hierarchy
      SELECT FROM +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_cte\_result).
    ASSERT cte\_cte\_result = cds\_result.
    out->end\_code( \`cte\_cte\`
      )->end\_section(
      )->end\_section(
      )->next\_section( \`Hierarchy Navigators\`
      )->begin\_section( \`HIERARCHY\_DESCENDANTS\` ).
    "Get the ID of the second longest subtree
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id ) AS h
           FIELDS id
           ORDER BY hierarchy\_tree\_size DESCENDING
           INTO TABLE @DATA(sub\_ids)
           UP TO 1 ROWS OFFSET 1.
    DATA(sub\_id) = sub\_ids\[ 1 \]-id.
    out->begin\_code( \`descendants\` ).
    SELECT FROM HIERARCHY\_DESCENDANTS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @sub\_id  )
      FIELDS id,
             parent\_id,
             name,
             hierarchy\_distance
      INTO TABLE @DATA(descendants).
    out->end\_code( \`descendants\`
      )->write( descendants
      )->next\_section( \`HIERARCHY\_ANCESTORS\` ).
    "Get the ID of the longest path
    SELECT SINGLE FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
           FIELDS id
           WHERE hierarchy\_level = (
             SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
                    FIELDS MAX( hierarchy\_level ) AS max\_level )
           INTO (@DATA(max\_id)). "#EC CI\_NOWHERE
    out->begin\_code( \`ancestors\` ).
    SELECT FROM HIERARCHY\_ANCESTORS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @max\_id )
      FIELDS id,
              parent\_id,
              name,
              hierarchy\_distance
      INTO TABLE @DATA(ancestors).
    out->end\_code( \`ancestors\`
      )->write( ancestors
      )->next\_section( \`HIERARCHY\_SIBLINGS\` ).
    "Get the ID of a node with the most siblings
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
           FIELDS hierarchy\_parent\_rank AS rank,
                  COUNT( hierarchy\_parent\_rank ) AS rank\_count
           GROUP BY hierarchy\_parent\_rank
           ORDER BY rank\_count DESCENDING
           INTO TABLE @DATA(rank\_counts)
           UP TO 1 ROWS.
    DATA(sibl\_id) =
      cds\_result\[ hierarchy\_parent\_rank = rank\_counts\[ 1 \]-rank \]-id.
    out->begin\_code( \`siblings\` ).
    SELECT FROM HIERARCHY\_SIBLINGS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @sibl\_id )
      FIELDS id,
              parent\_id,
              name,
              hierarchy\_sibling\_distance
      INTO TABLE @DATA(siblings).
    out->end\_code( \`siblings\`
      )->write( siblings
      )->next\_section( \`HIERARCHY\_DESCENDANTS\_AGGREGATE\`
      )->begin\_code( \`descendants\_aggregate\` ).
    SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @sub\_id  ) AS h
                  JOIN @value\_tab AS v
                    ON  v~id = h~id
                  MEASURES SUM( v~amount ) AS amount\_sum
                  WHERE hierarchy\_rank > 1
                  WITH SUBTOTAL
                  WITH BALANCE )
      FIELDS id,
             amount\_sum,
             hierarchy\_rank,
             hierarchy\_aggregate\_type
      INTO TABLE @DATA(descendants\_aggregate).
    out->end\_code( \`descendants\_aggregate\`
      )->write( descendants\_aggregate ).
    SELECT FROM HIERARCHY\_DESCENDANTS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @sub\_id  )
                  START WHERE id = @sub\_id  ) AS h
                  LEFT OUTER JOIN @value\_tab AS v
                     ON  v~id = h~id
           FIELDS  h~id,
                   h~parent\_id,
                   v~amount,
                   hierarchy\_rank
    INTO TABLE @DATA(join).
    out->write( join ).
    ASSERT
      descendants\_aggregate\[ hierarchy\_aggregate\_type  = 1 \]-amount\_sum
        = REDUCE value-amount(
            INIT s TYPE decfloat34
            FOR <v> IN join WHERE ( hierarchy\_rank > 1 )
             NEXT s += <v>-amount ).
    ASSERT
      descendants\_aggregate\[ hierarchy\_aggregate\_type  = 2 \]-amount\_sum
        = join\[ hierarchy\_rank = 1 \]-amount.
    DELETE FROM demo\_simple\_tree. "GTT must be deleted
    out->display( ).  ENDMETHOD.
  METHOD fill\_table.
    DATA tree\_tab TYPE TABLE OF demo\_simple\_tree WITH EMPTY KEY.
    tree\_tab = VALUE #(
        ( id = 1  parent\_id = 0 name = '1'  )
        ( id = 2  parent\_id = 0 name = '2'  )
        ( id = 3  parent\_id = 0 name = '3'  )
        ( id = 4  parent\_id = 0 name = '4'  )
        ( id = 5  parent\_id = 0 name = '5'  )
        ( id = 6  parent\_id = 0 name = '6'  )
        ( id = 7  parent\_id = 0 name = '7'  )
        ( id = 8  parent\_id = 0 name = '8'  )
        ( id = 9  parent\_id = 0 name = '9'  )
        ( id = 10 parent\_id = 0 name = '10' ) ).
    DATA(id) = 10.
    DO.
      DATA(parent\_id) = rnd->get\_next( ).
      IF line\_exists( tree\_tab\[ id = parent\_id \] ).
        id += 1.
        tree\_tab = VALUE #( BASE tree\_tab (
          id        =  id
          parent\_id = parent\_id
          name      = tree\_tab\[ id = parent\_id \]-name && \`-\` && id ) ).
      ENDIF.
      IF id > 1000.
        EXIT.
      ENDIF.
    ENDDO.
    DELETE FROM demo\_simple\_tree.
    INSERT demo\_simple\_tree FROM TABLE @tree\_tab.
    DATA value\_rnd TYPE REF TO cl\_abap\_random\_int.
    value\_rnd = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 100 ).
    LOOP AT tree\_tab ASSIGNING FIELD-SYMBOL(<node>).
      value\_tab = VALUE #( BASE value\_tab (
        id = <node>-id
        amount =
          value\_rnd->get\_next( ) / value\_rnd->get\_next( ) \* 100 ) ).
    ENDLOOP.
  ENDMETHOD.
  METHOD get\_root\_id.
    DO.
      root\_id = rnd->get\_next( ).
      SELECT SINGLE 'X'
             FROM demo\_simple\_tree
             WHERE id = @root\_id
             INTO @DATA(id\_exists).
      IF sy-subrc = 0.
        EXIT.
      ENDIF.
    ENDDO.
  ENDMETHOD.
  METHOD class\_constructor.
    rnd = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                      min  = 1
                                      max  = 1000 ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example is explained in detail under [Working with Hierarchies](javascript:call_link\('abapsheet_abap_sql_hierarchies.htm'\)). Besides the code snippets shown there it contains the generation of example data and the determination of some start values that lead to meaningful results.
