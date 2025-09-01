---
title: "ABAP SQL - Working with Hierarchies"
description: |
  This example summarizes the functions ABAP SQL offers together with ABAP CDS for working with hierarchical data(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_glosry.htm 'Glossary Entry') that is stored in database tables. Source Code  Public class definition CLASS
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensheet_abap_sql_hiera_abexa.htm"
abapFile: "abensheet_abap_sql_hiera_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abensheet", "abap", "sql", "hiera", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_data.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Working%20with%20Hierarchies%2C%20ABENSHEET_ABAP_SQL_HIERA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP SQL - Working with Hierarchies

This example summarizes the functions ABAP SQL offers together with ABAP CDS for working with [hierarchical data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_glosry.htm "Glossary Entry") that is stored in database tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_hierarchies DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF value,
        id     TYPE i,
        amount TYPE p LENGTH 16 DECIMALS 2,
      END OF value.
    DATA
      value\_tab TYPE SORTED TABLE OF value WITH UNIQUE KEY id.
    DATA
      rnd TYPE REF TO cl\_abap\_random\_int.
    METHODS:
      fill\_table,
      get\_root\_id RETURNING VALUE(root\_id) TYPE i.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_hierarchies IMPLEMENTATION.
  METHOD main.
    fill\_table( ).
    FINAL(root\_id) =  get\_root\_id( ) / 10 + 1.
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
           INTO TABLE @FINAL(cds\_result).
    out->end\_code( \`cds\`
       )->write( cds\_result ).
    IF lines( cds\_result ) < 10 OR lines( cds\_result ) > 20.
      CLEAR value\_tab.
      me->main(  ).
      RETURN.
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
           INTO TABLE @FINAL(asql\_cds\_result).
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
              JOIN MANY TO MANY +cte\_simple\_tree\_source AS \_tree
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
             INTO TABLE @FINAL(asql\_cte\_result).
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
             INTO TABLE @FINAL(cte\_cds\_result).
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
             INTO TABLE @FINAL(cte\_asql\_result).
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
             JOIN MANY TO MANY +cte\_simple\_tree\_source AS \_tree
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
             INTO TABLE @FINAL(cte\_cte\_result).
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
           INTO TABLE @FINAL(sub\_ids)
           UP TO 1 ROWS OFFSET 1.
    FINAL(sub\_id) = sub\_ids\[ 1 \]-id.
    out->begin\_code( \`descendants\` ).
    SELECT FROM HIERARCHY\_DESCENDANTS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @sub\_id  )
      FIELDS id,
             parent\_id,
             name,
             hierarchy\_distance
      INTO TABLE @FINAL(descendants).
    out->end\_code( \`descendants\`
      )->write( descendants
      )->next\_section( \`HIERARCHY\_ANCESTORS\` ).
    "Get the ID of the longest path
    SELECT SINGLE FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
           FIELDS id
           WHERE hierarchy\_level = (
             SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
                    FIELDS MAX( hierarchy\_level ) AS max\_level )
           INTO (@FINAL(max\_id)).
    out->begin\_code( \`ancestors\` ).
    SELECT FROM HIERARCHY\_ANCESTORS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @max\_id )
      FIELDS id,
              parent\_id,
              name,
              hierarchy\_distance
      INTO TABLE @FINAL(ancestors).
    out->end\_code( \`ancestors\`
      )->write( ancestors
      )->next\_section( \`HIERARCHY\_SIBLINGS\` ).
    "Get the ID of a node with the most siblings
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
           FIELDS hierarchy\_parent\_rank AS rank,
                  COUNT( hierarchy\_parent\_rank ) AS rank\_count
           GROUP BY hierarchy\_parent\_rank
           ORDER BY rank\_count DESCENDING
           INTO TABLE @FINAL(rank\_counts)
           UP TO 1 ROWS.
    FINAL(sibl\_id) =
      cds\_result\[ hierarchy\_parent\_rank = rank\_counts\[ 1 \]-rank \]-id.
    out->begin\_code( \`siblings\` ).
    SELECT FROM HIERARCHY\_SIBLINGS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @sibl\_id )
      FIELDS id,
              parent\_id,
              name,
              hierarchy\_sibling\_distance
      INTO TABLE @FINAL(siblings).
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
      INTO TABLE @FINAL(descendants\_aggregate).
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
    INTO TABLE @FINAL(join).
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
  ENDMETHOD.
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
      FINAL(parent\_id) = rnd->get\_next( ).
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
    value\_rnd = cl\_abap\_random\_int=>create(
          seed = CONV #( cl\_demo\_date\_time=>get\_system\_time( ) )
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
             INTO @FINAL(id\_exists).
      IF sy-subrc = 0.
        EXIT.
      ENDIF.
    ENDDO.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    rnd = cl\_abap\_random\_int=>create(
      seed = CONV #( cl\_demo\_date\_time=>get\_system\_time( ) )
      min  = 1
      max  = 1000 ).
  ENDMETHOD.
ENDCLASS.

Description   

Hierarchical data in database tables means that lines of one or more database tables are connected by [parent-child relationships](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcr_glosry.htm "Glossary Entry"). There are many use cases where hierarchical data plays a role and where accessing information about the hierarchical relationship is important. For example, a common task can be to find out the descendants or ancestors of a given hierarchy node or to aggregate values of subtrees.

Overview   

In former times you had to load the data from the database into internal tables and program it all by yourself (if you did not find an appropriate API). In between, [meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_glosry.htm "Glossary Entry") offered some features for working with hierarchies, as shown in this [example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_for_reflex_sngl_abexa.htm), but have not found wide distribution.

Meanwhile, the standard AS ABAP database is a SAP HANA database that offers a lot of helpful features. Among other things, you will find a set of hierarchy functions there that allow you to deal with hierarchical data directly on the database and that you can look up in the [SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f). Now you might expect that you must use [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) in order to access these functions from your ABAP programs, but no need to do so! ABAP SQL and ABAP CDS support hierarchies directly by wrapping the HANA built-in functions without any loss of performance. You can stay in the comfortable ABAP world and nevertheless have access to most modern features. All you have to do, is to understand some concepts and learn some additional syntax and then you can start right away.

SQL Hierarchies   

With [SQL hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") we denote a special [hierarchical data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_data.htm) that you can use in the FROM clause of ABAP SQL queries. A SQL hierarchy is a tabular set of rows which form the hierarchy nodes of a hierarchy and which contains additionally [hierarchy columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") that contain hierarchy attributes with hierarchy-specific information for each row. For creating a SQL hierarchy, you need the following:

-   Data Source
    
    This can be any data source you can access normally in an ABAP SQL query, as most commonly a database table or a CDS view, but also a CTE (common table expression). The structure and content of the data source should be able to represent hierarchical data.
    
-   Parent-Child Relation
    
    A parent-child relation must be defined between two or more columns of the data source. From the parent-child relation and the actual data of the data source, the SQL hierarchy consisting of parent nodes and child nodes can be created. The parent-child relation must be defined by a self-association which we call hierarchy association. This can be achieved with CDS associations or CTE associations. A data source exposing a hierarchy association can be used as a hierarchy source for creating a SQL hierarchy.
    
-   Hierarchy Creation
    
    From a hierarchy source, that is a data source exposing a hierarchy association, a SQL hierarchy can be created. This can be done either by defining a CDS hierarchy outside an ABAP program or with the hierarchy generator of ABAP SQL directly in the FROM clause of an ABAP SQL query inside an ABAP program.
    

The following topics show you step-by-step how SQL hierarchies can be created and accessed.

Creating SQL Hierarchies   

ABAP CDS Hierarchies   

With [CDS hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_column_glosry.htm "Glossary Entry"), you outsource the hierarchy data source and the creation of the SQL hierarchy from your ABAP program to ABAP CDS. Here the hierarchy is a fully fledged CDS entity, it is reusable in different programs or in other CDS entities (views), and can be part of your data model including access control using CDS DCL. For a CDS hierarchy, the hierarchy source cannot be anything else but a CDS view that exposes a [hierarchy association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_association_glosry.htm "Glossary Entry"). Here is a very simple example for that:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
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

This CDS view entity accesses the database table DEMO\_SIMPLE\_TREE, where the actual data is stored, and exposes a [self-association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenself_association_glosry.htm "Glossary Entry") \_tree. The ON condition of the association defines a parent-child relation between the elements id and parent. It simply means that a row of the result set where column parent has the same value as the column id of another row is a child of the latter row in the hierarchy that is constructed from that view. The CDS view exposes also another column name of the database table that represents the remaining data content. Note that you can define such CDS views for any available data source and that the ON condition can be more complex than shown in the simple example here.

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

The CDS DDL statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm) that can be used in the DDL source code editor of ADT defines a CDS hierarchy as a CDS entity that can be accessed in CDS views or ABAP SQL as a SQL hierarchy. The most important additions of the statement are:

-   SOURCE for specifying the hierarchy source, here our DEMO\_CDS\_SIMPLE\_TREE\_VIEW.
-   CHILD TO PARENT ASSOCIATION for specifying the hierarchy association, here \_tree.
-   START WHERE for defining the root nodes of the SQL hierarchy, here represented by an input parameter p\_id that must be passed when accessing the CDS hierarchy.
-   SIBLINGS ORDER BY to define also a sort order for sibling nodes besides the sort order that comes from the parent-child relationship anyhow.
-   An element list { ... } that defines the columns of the SQL hierarchy, here simply all elements of the hierarchy source.

For a full description and all other additions see [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm).

When you access the CDS hierarchy, all lines are selected from the original data source, in our case the database table DEMO\_SIMPLE\_TREE, that fulfill the START WHERE condition. Those make up the root node set of the SQL hierarchy. In the simplest case we have exactly one root node, but more are possible. Then, for each root node, its descendants are retrieved. That means each line from the database table that fulfills the ON\-condition of the hierarchy association is added to the SQL hierarchy. And for each descendant this is done again and again until all descendants are found. And that is basically all! Further additions to DEFINE HIERARCHY allow you to control the creation of the SQL hierarchy, for example, whether multiple parents are allowed or how orphans or cycles should be handled.

Besides the elements of the hierarchy, the element list can also contain the hierarchy attributes listed under [Hierarchy Attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_attributes.htm). Then the SQL hierarchy is enriched with columns containing information about the role, the current line plays as a hierarchy node, as, for example, the hierarchy rank or the hierarchy level. In our example, we did not add such elements, because ABAP SQL does that implicitly for you when accessing the CDS hierarchy!

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
           INTO TABLE @FINAL(cds\_result).

And although we did not define any hierarchy attributes in the element list of the CDS hierarchy, we can add all the hierarchy columns listed under [Hierarchy Columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddddl_hierarchy.htm) to the SELECT list of our ABAP SQL statement! This is always possible when a SQL hierarchy is accessed in ABAP SQL. We can pass any ID to the CDS hierarchy now and see what happens. If such a line is found in the database table, the respective hierarchical data will be retrieved and delivered. Execute class CL\_DEMO\_SQL\_HIERARCHIES for filling the database table with randomly generated data and inspect the tabular result. As expected, all elements of the SELECT list appear as columns. Note that the content of column NAME could be anything. It is filled here with a string representation of the path from the root node to the current node for demonstration purposes only.

From the ABAP language point of view, CDS hierarchies are the most convenient way of using SQL hierarchies. Now let us turn to other ways, involving more ABAP, until we do not use any CDS more in the end.

ABAP SQL Hierarchy Generator HIERARCHY   

The ABAP SQL [hierarchy generator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") is a ABAP SQL function named [HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_generator.htm), that allows you to define a SQL hierarchy in the ABAP program itself. Let us look directly at an example:

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
       INTO TABLE @FINAL(asql\_cds\_result).

ASSERT asql\_cds\_result = cds\_result.

Looks familiar? Well, almost the same syntax used for defining the CDS hierarchy is used in the brackets HIERARCHY( ... ) and it does exactly the same thing! The difference is the same as it is between ABAP SQL joins and joins in CDS views:

-   If you code it in ABAP SQL, it is for usage in one program only.
-   If you code it in ABAP CDS, it is for usage in many programs or whole data models.

And, as you can see, we dare to prove this with an ASSERT statement. Also note that we use the hierarchy columns again. They exist implicitly when an SQL hierarchy, here created by the hierarchy generator, is accessed.

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
          JOIN MANY TO MANY +cte\_simple\_tree\_source AS \_tree
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
         INTO TABLE @FINAL(asql\_cte\_result).

ASSERT asql\_cte\_result = cds\_result.

Common table expressions (CTEs) are a very powerful tool for defining subqueries that can be used in subsequent queries of the same [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) statement. They can be regarded as an internal ABAP SQL definition of data sources that fulfill the same functionality as program external data sources, especially CDS views. As you see above, the CTE cte\_simple\_tree\_source does the same as the CDS view DEMO\_CDS\_SIMPLE\_TREE\_VIEW:

-   It accesses the database table DEMO\_SIMPLE\_TREE.
-   It exposes an association \_tree by using the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith_associations.htm).

The main query of the WITH statement uses the hierarchy generator in the same way as the SELECT above, just with the CTE as a data source instead of the CDS view and the result is - of course - the same.

For a full description of the hierarchy generator and all other additions see [SELECT, FROM HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_generator.htm).

We managed to create a SQL hierarchy with ABAP SQL means only. Last but not least we will use CTEs as hierarchies themselves. You might skip the following section and turn directly to the hierarchy navigators if you are not too interested in this syntactic gimmicks.

ABAP CTE Hierarchies   

A CTE that produces hierarchical data can declare itself as a SQL hierarchy of a freely defined name with the addition [WITH HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith_hierarchy.htm). That simply means that subsequent queries of the same WITH statement can use the CTE as a hierarchy with its implicit hierarchy columns or - more important - in hierarchy navigators.

The following code snippets show the three ways in which a CTE can produce hierarchical data:

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
             INTO TABLE @FINAL(cte\_cds\_result).
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
             INTO TABLE @FINAL(cte\_asql\_result).
...
WITH
      +cte\_simple\_tree\_source AS
        ( SELECT FROM demo\_simple\_tree
                 FIELDS id,
                        parent\_id AS parent,
                        name )
           WITH ASSOCIATIONS (
             JOIN MANY TO MANY +cte\_simple\_tree\_source AS \_tree
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
             INTO TABLE @FINAL(cte\_cte\_result).

ASSERT cte\_cds\_result  = cds\_result.
ASSERT cte\_asql\_result = cds\_result.
ASSERT cte\_cte\_result  = cds\_result.

A CTE that is exposed as a SQL hierarchy must access a SQL hierarchy itself and in the end these are always based on a CDS hierarchy or the ABAP SQL hierarchy generator as shown above. Again, the hierarchy source of the hierarchy generator can be a CDS view or a CTE exposing the hierarchy association. Executing CL\_DEMO\_SQL\_HIERARCHIES shows that all assertions are fulfilled.

Hierarchy Navigators   

[Hierarchy navigators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") are an additional set of [hierarchy functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_function_glosry.htm "Glossary Entry") in ABAP SQL that allow you to work on existing SQL hierarchies instead of creating them. Hierarchy navigators can work on SQL hierarchies created as shown above, namely on CDS hierarchies, the hierarchy generator or a CTE hierarchy. They can be used as data sources in ABAP SQL queries. If you need a SQL hierarchy multiple times, from a performance point of view it is best to create it once with a given set of root nodes and then access it with hierarchy navigators. Furthermore, each hierarchy navigator can add further hierarchy columns to the result set that offer additional options for the evaluation.

In the following examples, we access our CDS hierarchy with hierarchy navigators. But you could also replace it with the hierarchy generator or a CTE hierarchy. Check the examples of the [documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_navigators.htm), where this is also shown.

Hierarchy Node Navigator HIERARCHY\_DESCENDANTS   

As the name says, [HIERARCHY\_DESCENDANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_node_navis.htm) fetches all descendants for any nodes from a SQL hierarchy. It adds HIERARCHY\_DISTANCE as an additional hierarchy column to the result set. Let us look at an example. All examples are code snippets from CL\_DEMO\_SQL\_HIERARCHIES again.

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
  INTO TABLE @FINAL(descendants).

Our CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE\_VIEW is used to create a SQL hierarchy with a start node passed to parameter p\_id and for a node sub\_id all descendants are fetched. Running the program shows the result including the additional column HIERARCHY\_DISTANCE that contains the distance to the respective start node. A further parameter DISTANCE - not shown here - allows you to restrict the distance to the respective start node.

Hierarchy Node Navigator HIERARCHY\_ANCESTORS   

Now the other way around: The ABAP SQL function [HIERARCHY\_ANCESTORS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_node_navis.htm) returns the ancestors of any given node of an existing hierarchy:

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
  INTO TABLE @FINAL(ancestors).

Looking at the result when executing CL\_DEMO\_SQL\_HIERARCHIES, you see that the value of column HIERARCHY\_DISTANCE is negative now. Using aggregate functions or evaluating the internal result table, you can now easily extract further information like the number of ancestors and so on.

Hierarchy Node Navigator HIERARCHY\_SIBLINGS   

Besides descendants and ancestors, hierarchy nodes also can have siblings, that is nodes that have the same parent node. You can find these by looking for all nodes with the same value in hierarchy column HIERARCHY\_PARENT\_RANK. But there is also [HIERARCHY\_SIBLINGS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_node_navis.htm) as a hierarchy function for that:

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
  INTO TABLE @FINAL(siblings).

You see that this function adds another hierarchy column HIERARCHY\_SIBLING\_DISTANCE that contains the distance to the respective start node. Executing CL\_DEMO\_SQL\_HIERARCHIES, where we start with a node that definitely has some siblings, shows the result.

Hierarchy Aggregate Navigators   

Finally let us turn to the [hierarchy aggregate navigators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") that allow you to apply some aggregate functions to descendants and ancestors of any node of a SQL hierarchy:

-   [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_desc_agg.htm)
-   [HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_ancs_agg.htm)

We will show an example for the descendants case and refer to the [documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_ancs_agg.htm) for the ancestors.

Applying aggregate functions to columns normally means that you have some data there for which this makes sense. In our simplistic SQL hierarchy tree we do not have such meaningful data. On the other hand, this can also be a use case: You can have the administrative data for the parent-child relation in one database table and the real data in another one. And for that use case, the hierarchy aggregate navigator HIERARCHY\_DESCENDANTS\_AGGREGATE gives you the option of joining such data to your SQL hierarchy:

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
  INTO TABLE @FINAL(descendants\_aggregate).

In our example, we join an internal table value\_tab of the same program to the SQL hierarchy. In a real life example you would join another database table, of course. On the other hand the example shows ABAP SQL's capability of using internal tables as data sources. You even can go so far to evaluate hierarchical data in internal tables with ABAP SQL by using an internal table as data source for a CTE hierarchy!

The example does the following:

-   We use the hierarchy aggregate navigator HIERARCHY\_DESCENDANTS\_AGGREGATE as a data source of a FROM clause.
-   Our CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE\_VIEW joined with internal table value\_tab is used as the data source.
-   The ABAP SQL function returns a tabular result of nodes of the data source.
-   The aggregate function SUM behind MEASURES sums up the values of the column amounts of the joined internal table for all descendants of each node returned by the ABAP SQL function.
-   The WHERE condition restricts the result set by a freely programmable condition.
-   The WITH additions add further rows to the result set that can be recognized by values in an additional hierarchy column HIERARCHY\_AGGREGATE\_TYPE:
    
    -   WITH SUBTOTAL
        
        In the row where HIERARCHY\_AGGREGATE\_TYPE has value 1, column AMOUNT\_SUM contains the sum of the values of all hierarchy nodes that meet the WHERE condition.
        
    -   WITH BALANCE
        
        In the row where HIERARCHY\_AGGREGATE\_TYPE has value 2, column AMOUNT\_SUM contains the sum of the values of all hierarchy nodes that do not meet the WHERE condition.
        
    
    For more WITH additions see the [documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_desc_agg.htm).
    

Executing CL\_DEMO\_SQL\_HIERARCHIES shows the result. It also shows the result of the joined data source, where you can check that the calculated values are correct.