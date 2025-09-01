  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20FROM%20HIERARCHY%2C%20ABENSELECT_HIERARCHY_GENERATOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, FROM HIERARCHY

Syntax

... HIERARCHY( SOURCE hierarchy\_source *\[*WITH PRIVILEGED ACCESS*\]*
               CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc
              *\[*PERIOD FROM field1 TO field2 VALID FROM from TO to*\]*
               START WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm)
              *\[*SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]**\[*,
                                 field2 *\[*ASCENDING*|*DESCENDING*\]*, ...*\]**\]*
              *\[*DEPTH depth*\]*
              *\[*MULTIPLE PARENTS *{*NOT ALLOWED*}**{*LEAVES ONLY*}**|*ALLOWED*\]*
              *\[*ORPHANS IGNORE*|*ERROR*|*ROOT*\]*
              *\[*CYCLES ERROR*|*BREAKUP*\]*
              *\[*LOAD BULK*|*INCREMENTAL*|*load\_option*\]*
              *\[*GENERATE SPANTREE*\]* ) ...

Additions:

[1\. ... SOURCE hierarchy\_source *\[*WITH PRIVILEGED ACCESS*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... PERIOD FROM field1 TO field2 VALID FROM from TO to](#!ABAP_ADDITION_3@3@)
[4\. ... START WHERE sql\_cond](#!ABAP_ADDITION_4@4@)
[5\. ... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*, ...](#!ABAP_ADDITION_5@5@)
[6\. ... DEPTH depth](#!ABAP_ADDITION_6@6@)
[7\. ... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED](#!ABAP_ADDITION_7@7@)
[8\. ... ORPHANS IGNORE*|*ERROR*|*ROOT](#!ABAP_ADDITION_8@8@)
[9\. ... CYCLES ERROR*|*BREAKUP](#!ABAP_ADDITION_9@9@)
[10\. ... LOAD BULK*|*INCREMENTAL*|*load\_option](#!ABAP_ADDITION_10@10@)
[11\. ... GENERATE SPANTREE](#!ABAP_ADDITION_11@11@)

Effect

Specifies the [hierarchy generator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") HIERARCHY as an [SQL hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) in an ABAP SQL query. The hierarchy generator creates the SQL hierarchy. The following needs to be specified:

-   The [hierarchy source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_source_glosry.htm "Glossary Entry") hierarchy\_source of the SQL hierarchy must be specified after SOURCE.
-   After CHILD TO PARENT ASSOCIATION, a [hierarchy association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") \_hierarchy\_assoc exposed by the source hierarchy\_source must be specified. The [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") and [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of this association must be the source hierarchy\_source. The ON condition of the hierarchy association defines the [parent-child relationships](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcr_glosry.htm "Glossary Entry") between the [hierarchy nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_node_glosry.htm "Glossary Entry").
-   START WHERE must be followed by a start condition that defines [root nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry") for the [root node set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_set_glosry.htm "Glossary Entry") of the SQL hierarchy. The SQL hierarchy consists of the root nodes of the root node set and their [descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry").

All other additions are optional and define further properties of the SQL hierarchy. The rows of the tabular result set of the hierarchy generator are the [hierarchy nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the generated SQL hierarchy and their columns are composed of the elements of the source specified after SOURCE and the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm).

The hierarchy generator HIERARCHY exposes all associations of the source hierarchy\_source specified after SOURCE implicitly and leaves its [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") unchanged.

Hints

-   The order of the additions is fixed. They must be specified as shown here.
-   Rows of the result set of the source specified after SOURCE can occur more than once in the result set of the hierarchy generator, if selected by appropriate parent-child relationships.
-   The hierarchy generator HIERARCHY in ABAP SQL works in the same way as the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_hierarchy.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry"). Accessing the hierarchy generator HIERARCHY as the data source of a query is the same as accessing a [CDS hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") defined accordingly.
-   Since hierarchies generated from the START WHERE condition are buffered on the database, it is advisable to use fixed values for the root nodes of large hierarchies of data that do not change often. To evaluate subnodes of such hierarchies, the [hierarchy navigators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") of ABAP SQL can then be used.
-   Hierarchy functions cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm). The ABAP SQL statement bypasses the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") and an internal table accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   An association exposed implicitly by the hierarchy generator HIERARCHY can be used in [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) or in further hierarchy generators.

Example

Specifies the hierarchy generator HIERARCHY as the data source of a SELECT statement in class CL\_DEMO\_HIERARCHY\_TREE. The source of the hierarchy generator is a CDS view that uses the [global temporary table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") DEMO\_SIMPLE\_TREE as a data source and whose CDS association \_tree defines the parent-child relationship. The hierarchy generator selects the row with the value of start\_id in the column ID as the [root node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry") and, starting from this node, inserts all [descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry") in the result set that meet the ON condition of the hierarchy association. The result set contains all columns of the view DEMO\_CDS\_SIMPLE\_TREE\_SOURCE, plus all potential [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm). Executing CL\_DEMO\_HIERARCHY\_TREE demonstrates the result of the SELECT statement.

FINAL(start\_id) = 1.
SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = @start\_id
                       SIBLINGS ORDER BY parent
                       MULTIPLE PARENTS NOT ALLOWED )
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
       INTO TABLE @FINAL(asql\_result).

Addition 1   

... SOURCE hierarchy\_source *\[*WITH PRIVILEGED ACCESS*\]*

Effect

The addition SOURCE specifies hierarchy\_source as the [hierarchy source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_source_glosry.htm "Glossary Entry") of the hierarchy generator. This source must expose the [hierarchy association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") \_hierarchy\_assoc specified after CHILD TO PARENT ASSOCIATION. The following are potential sources hierarchy\_source:

-   A CDS view cds\_view
    
    cds\_view can be specified as a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") that exposes the hierarchy association \_hierarchy\_assoc in its SELECT list.
    
-   A common table expression +cte
    
    +cte can be specified as a preceding [common table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") in a [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) statement that exposes the hierarchy association \_hierarchy\_assoc using the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm). The self-association prerequisite can be met as follows:
    
    -   The addition [REDIRECTED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_using.htm) is used to replace the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of an association of a data source of the common table expression with the common table expression itself.
    -   [JOIN cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_defining.htm) is used to define a CTE association as a self-association for the common table expression.
-   A nested SQL hierarchy hierarchy
    
    The hierarchy generator HIERARCHY can use other SQL hierarchies [hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) as a source. The following applies here:
    
    -   A CDS hierarchy [cds\_hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_cds_hierarchy.htm) must expose the hierarchy association \_hierarchy\_assoc in its element list. To meet the self-association prerequisite, the association must be an additional association between the source of the CDS hierarchy and the CDS hierarchy.
    -   The hierarchy generator HIERARCHY exposes all associations of its source implicitly.
    -   A [CTE hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") must use [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) to expose the hierarchy association \_hierarchy\_assoc. Furthermore, the addition REDIRECTED must be used to replace the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the association in such a way that the self-association prerequisite is met.
    
    The hierarchy generator uses the result of an SQL hierarchy specified after SOURCE as a source, whereby its additional [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm) are ignored. An outer hierarchy generator always adds its own hierarchy columns directly to the columns of the SQL hierarchy specified after SOURCE. Any hierarchy columns listed explicitly in the element list of a CDS hierarchy that is specified as a source, on the other hand, are part of this hierarchy's result set and are respected accordingly.
    

If a [CDS role](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") is assigned to a CDS view specified as a source, the source is implicitly subject to [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") and only nodes that meet the [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") of the CDS role are transferred to the SQL hierarchy. When specifying the optional addition WITH PRIVILEGED ACCESS, the access control is deactivated, and the access conditions are not evaluated.

Hint

SQL hierarchies should only be nested in exceptional cases.

Example

Uses a CDS view and two common table expressions as the source of the hierarchy generator HIERARCHY in the class CL\_DEMO\_HIERARCHY\_GENERATOR.

-   The first common table expression accesses the same CDS view and uses a path expression to [expose](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_using.htm) the same hierarchy association. This expression must use [REDIRECTED TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) to redirect the hierarchy association to itself and hence meet the self-association requirement.
-   The second common table expression accesses the DDIC database table DEMO\_SIMPLE\_TREE in the same way as the CDS view and [defines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_defining.htm) a separate [CTE association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry") as a self-association that is then used as a hierarchy association.

All main queries have the same result.

FINAL(start\_id) = 1.
"CDS view as source of hierarchy generator
SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = @start\_id
                       SIBLINGS ORDER BY parent
                       MULTIPLE PARENTS NOT ALLOWED )
       FIELDS name
       INTO TABLE @FINAL(cds\_result).
"CTE with association exposed as path as source of hierarchy generator
WITH +tree AS (
        SELECT FROM demo\_cds\_simple\_tree\_source AS tree
               FIELDS \* )
        WITH ASSOCIATIONS ( \\\_tree
                            REDIRECTED TO +tree
                            VIA tree )
  SELECT FROM HIERARCHY(
                SOURCE +tree
                CHILD TO PARENT ASSOCIATION \_tree
                START WHERE id = @start\_id )
         FIELDS name
         INTO TABLE @FINAL(cte\_path\_result).
ASSERT cte\_path\_result = cds\_result.
"CTE with association defined as join as source of hierarchy generator
WITH +simple\_tree\_source AS (
        SELECT FROM demo\_simple\_tree
               FIELDS id,
                      parent\_id as parent,
                      name )
        WITH ASSOCIATIONS ( JOIN MANY TO ONE +simple\_tree\_source
                              as \_tree
                              ON +simple\_tree\_source~parent = \_tree~id )
  SELECT FROM HIERARCHY(
                SOURCE +simple\_tree\_source
                CHILD TO PARENT ASSOCIATION \_tree
                START WHERE id = @start\_id )
         FIELDS name
         INTO TABLE @FINAL(cte\_join\_result).
ASSERT cte\_join\_result = cds\_result.

Example

Nesting of SQL hierarchies in the hierarchy generator HIERARCHY in the class CL\_DEMO\_HIERARCHY\_NESTED. When executed, CL\_DEMO\_HIERARCHY\_NESTED demonstrates the result of the SELECT statements. Three tree-like SQL hierarchies that start at the row with the value 1 in the column ID are restricted to a depth of 2. From these hierarchies, further SQL hierarchies are selected that start at the row with the value 5 in the column ID. The three inner SQL hierarchies are specified as a CDS hierarchy, the hierarchy generator HIERARCHY, and as a [CTE hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_hierarchy_glosry.htm "Glossary Entry"). In the case of the CDS hierarchy and the CTE hierarchy, the hierarchy association must be verified as a self-association explicitly. The three inner SQL hierarchies have the same result sets, which means that the results of the three SELECT statements are also the same.

"CDS hierarchy as source of hierarchy generator
SELECT FROM HIERARCHY(
              SOURCE demo\_cds\_simple\_tree\_redir( p\_id = 1,
                                                 p\_depth = 2 )
              CHILD TO PARENT ASSOCIATION \_redir
              START WHERE id = 5 )
       FIELDS id,
              parent,
              hierarchy\_rank,
              hierarchy\_level
       INTO TABLE @FINAL(hierarchy\_cds\_hierarchy).
"Hierarchy generator as source of hierarchy generator
SELECT FROM HIERARCHY(
              SOURCE HIERARCHY(
                       SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       DEPTH 2 )
              CHILD TO PARENT ASSOCIATION \_tree
              START WHERE id = 5  )
       FIELDS id,
              parent,
              hierarchy\_rank,
              hierarchy\_level
       INTO TABLE @FINAL(hierarchy\_hierarchy).
ASSERT hierarchy\_hierarchy = hierarchy\_cds\_hierarchy.
"CTE hierarchy as source of hierarchy generator
WITH +hierarchy AS (
        SELECT FROM HIERARCHY(
                      SOURCE demo\_cds\_simple\_tree\_source
                      CHILD TO PARENT ASSOCIATION \_tree
                      START WHERE id = 1
                      DEPTH 2 ) AS hierarchy
               FIELDS id,
                      parent )
        WITH HIERARCHY hierarchy
        WITH ASSOCIATIONS ( \\\_tree
                            REDIRECTED TO +hierarchy
                            VIA hierarchy )
  SELECT FROM HIERARCHY(
                SOURCE +hierarchy
                CHILD TO PARENT ASSOCIATION \_tree
                START WHERE id = 5
                )
         FIELDS id,
                parent\_id,
                hierarchy\_rank,
                hierarchy\_level
         INTO TABLE @FINAL(hierarchy\_cte\_hierarchy).
ASSERT hierarchy\_cte\_hierarchy = hierarchy\_cds\_hierarchy.

Addition 2   

... CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc

Effect

The addition CHILD TO PARENT ASSOCIATION specifies the [hierarchy association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry"), whose ON condition of the hierarchy generator selects the [descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry") of the [root node set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). The hierarchy association must be exposed by the source hierarchy\_source specified after SOURCE.

The hierarchy association defines the parent-child relationship between the [hierarchy nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_node_glosry.htm "Glossary Entry"). The following conditions apply here:

-   The association must be a [self-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenself_association_glosry.htm "Glossary Entry").
-   Only equality comparisons with the operator \= and combined using AND can occur in the ON condition of the association.
-   In each comparison in the ON condition, one field of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") must be compared with a field, which is prefixed with \_hierarchy\_assoc, of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry").
-   The [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the association cannot contain any fields that have the same name as a [hierarchy column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm). An alternative element name must be defined for these fields.

Each row of the result set of the source hierarchy\_source that meets the ON condition for an existing hierarchy node is included recursively in the SQL hierarchy as its [child node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_node_glosry.htm "Glossary Entry"), if possible.

Hint

The optional additions define further conditions specifying whether a row can be included as a hierarchy node or not.

Example

The following CDS view entity exposes its CDS association \_tree. This CDS association meets all requirements of a hierarchy association and can be used as such.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
  as select from demo\_simple\_tree
  association to exact one DEMO\_CDS\_SIMPLE\_TREE\_SOURCE as \_tree  
    on $projection.parent = \_tree.id
{
      \_tree,
  key id,
      parent\_id as parent,
      name
}

Addition 3   

... PERIOD FROM field1 TO field2 VALID FROM from TO to

Effect

Defines an SQL hierarchy as a [temporal SQL hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in which the hierarchy nodes are limited by an adjustment of time intervals.

-   With field1 and field2, the fields of the source hierarchy\_source are specified, which define the lower and upper limits of a [period](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenperiod_glosry.htm "Glossary Entry") in the hierarchy details. field1 and field2 must be different fields of the same data type. This can be:
    -   The built-in type [DATS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) of the ABAP Dictionary.
    -   A data type that is defined by one of the [DDIC data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry") TIMESTAMP or TIMESTAMPL.
-   from and to define the lower and upper limit of a time interval that acts as a condition for the periods of the [root node set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). For from and to, [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), [host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), and [type-compliant literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_literals.htm) can be specified, whose ABAP data type matches the dictionary data type of field1 and field2 exactly.

A temporal SQL hierarchy is created as follows:

-   Only [root nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry") of the [root node set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_set_glosry.htm "Glossary Entry") in which the period defined using field1 and field2 has a non empty intersection with the time interval defined by from and to are respected. This intersection forms the [validity interval](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the root node.
-   Only [child nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_node_glosry.htm "Glossary Entry") in which the period defined by field1 and field2 has a non empty intersection with the validity interval of the [parent node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparent_node_glosry.htm "Glossary Entry") are generated. This intersection forms the [validity interval](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the child node.

For temporal SQL hierarchies, there are additional [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm) VALID\_FROM and VALID\_UNTIL that contain the interval limits of the [validity interval](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of each hierarchy node.

The addition PERIOD must not be used with GENERATE SPANTREE.

Hints

-   The validity interval of a descendant node is always a subset of a validity interval of all ancestor nodes. Validity intervals can only remain the same or become narrower from hierarchy level to hierarchy level, they never widen.
-   For a descendant node to belong to a temporal SQL hierarchy, it is not sufficient for its period to overlap with the time interval defined by from and to. Only the validity interval of the parent node is decisive. A path of a regular SQL hierarchy is truncated in a temporal SQL hierarchy at the position in which there is no intersection between the period and the preceding validity interval.
-   The [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the current [hierarchy association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") must not have any fields called VALID\_FROM or VALID\_UNTIL. An alternative element name must be defined for these fields.
-   The value of to can also be less than the value of from. However, a validity interval is formed where necessary. In contrast, if the value of the lower interval limit of the period is greater than the value of the upper interval limit, the validity interval is empty.
-   Additions such as MULTIPLE PARENTS or CYCLES affect the temporal SQL hierarchy. Nodes that would raise an exception in a regular SQL hierarchy can be hidden in a temporal SQL hierarchy.
-   On an [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), the associated hierarchy generator function [HIERARCHY\_TEMPORAL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) is used to create a temporal SQL hierarchy.

Example

Creates two [temporal SQL hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in the class CL\_DEMO\_HIERARCHY\_TEMPORAL, where in one date fields and in the other time stamp fields are used as [periods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenperiod_glosry.htm "Glossary Entry").

SELECT FROM HIERARCHY(
  SOURCE demo\_cds\_parent\_child\_src\_prd
  CHILD TO PARENT ASSOCIATION \_relat
  PERIOD FROM date\_from TO date\_to
   VALID FROM @( CONV d( cl\_demo\_date\_time=>get\_user\_date( ) - 1 ) )
           TO @( CONV d( cl\_demo\_date\_time=>get\_user\_date( ) + 1 ) )
  START WHERE id = 'A'
  SIBLINGS ORDER BY id )
       FIELDS id,
              parent,
              valid\_from,
              valid\_until
       INTO TABLE @FINAL(asql\_date\_period) ##TYPE.
GET TIME STAMP FIELD FINAL(ts).
SELECT FROM HIERARCHY(
  SOURCE demo\_cds\_parent\_child\_src\_prd
  CHILD TO PARENT ASSOCIATION \_relat
  PERIOD FROM ts\_from TO ts\_to
   VALID FROM @( CONV timestamp(
                   cl\_abap\_tstmp=>subtractsecs(
                     tstmp = ts
                     secs  = 86400 ) ) )
           TO @( CONV timestamp(
                   cl\_abap\_tstmp=>add(
                     tstmp = ts
                     secs  = 86400 ) ) )
  START WHERE id = 'A'
  SIBLINGS ORDER BY id )
       FIELDS id,
              parent,
              valid\_from,
              valid\_until
       INTO TABLE @FINAL(asql\_ts\_period) ##TYPE.

When executed, this class demonstrates how the PERIOD addition works. The date and time stamp fields of the DDIC database table DEMO\_PARCHLD\_PRD, which are accessed in the source of the hierarchy generator DEMO\_CDS\_PARENT\_CHILD\_SRC\_PRD, are filled with data for this purpose. A regular SQL hierarchy without the addition PERIOD and the two temporal SQL hierarchies are shown. The [validity intervals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") are also output for these.

-   The temporal SQL hierarchy based on date fields contains only the nodes with the values A, B, and C in the column ID. The period of the node with the value D does not overlap with the validity interval of the parent node with the value B. This means that the child node with the value E is truncated, regardless of its period. All other nodes F to I haven empty periods and are not relevant anyway.
-   The temporal SQL hierarchy based on time stamps contains all nodes with periods TS\_FROM to TS\_TO that are not empty. The example illustrates how the validity intervals with the hierarchy levels can become narrower. In the last row, the validity interval corresponds to the previous one, even though the period is wider.

Addition 4   

... START WHERE sql\_cond.

Effect

The addition START WHERE specifies the start condition for the hierarchy generator. After START WHERE, a logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm) must be specified that selects rows from the source hierarchy\_source. The selected rows are inserted into the SQL hierarchy as a [root node set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). For each [root node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry") in the root node set, the [descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry") are selected that meet the ON condition of the hierarchy association and, if possible, inserted into the SQL hierarchy.

Hint

The start condition should select a meaningful set of root nodes. If no rows in the result set of the source hierarchy\_source meet the condition, the SQL hierarchy is empty. If all rows meet the condition, the descendant nodes of every row are selected and inserted.

Example

Specifies an interval condition for the start condition of the hierarchy generator HIERARCHY in the class CL\_DEMO\_HIERARCHY\_START\_WHERE. All rows in the CDS view specified as the source that meet the condition are inserted in the SQL hierarchy as root nodes and all their descendant nodes are selected. When executed, this class allows different limits to be entered and displays the result.

FINAL(from) = 'A '.
FINAL(to) =   'B '.
SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id BETWEEN @from AND @to
                       SIBLINGS ORDER BY parent
                       MULTIPLE PARENTS ALLOWED
                       CYCLES BREAKUP )
       FIELDS id,
              parent
       INTO TABLE @FINAL(asql\_result).

Addition 5   

... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*, ...

Effect

The addition SIBLINGS ORDER BY sorts [sibling nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensibling_node_glosry.htm "Glossary Entry") in the SQL hierarchy generated by the hierarchy generator. If this addition is not used, the order of the sibling nodes is undefined.

Fields field1, field2, ... of the source cds\_view can be specified in a comma-separated list after the addition hierarchy\_source to specify the order of the sibling nodes.

The addition ASCENDING or DESCENDING can be specified for each field to specify an ascending or descending order, whereby ascending is the default.

The fields specified after ORDER BY cannot be of the [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hints

-   If additionally a general [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) clause is specified in current query, it affects the SQL hierarchy that is sorted by SIBLINGS ORDER BY.
-   The additional [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm) cannot be specified after SIBLINGS ORDER BY. They can, however, be specified in the general [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) clause of the current query.

Example

Ascending and descending sort of [sibling nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensibling_node_glosry.htm "Glossary Entry") in the class CL\_DEMO\_HRRCHY\_SIBLINGS\_ORDER. When executed, this program demonstrates how these additions work.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       SIBLINGS ORDER BY id ASCENDING )
       FIELDS id,
              parent,
              hierarchy\_parent\_rank
       INTO TABLE @FINAL(result\_asc).
SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       SIBLINGS ORDER BY id DESCENDING )
       FIELDS id,
              parent,
              hierarchy\_parent\_rank
       INTO TABLE @FINAL(result\_desc).

Addition 6   

... DEPTH depth

Effect

The addition depth can be used to limit the number of [hierarchy levels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") used to create [descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry"). depth expects a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), or a [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_literals.htm) of type i. Only the types b, s, or i can be specified for depth.

The value in depth has the following meaning:

-   For depth values greater than 0, as many hierarchy edges as specified in depth are traced, starting from a [root node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry").
-   If the value of depth is 0, only the [root nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry") are inserted into the SQL hierarchy.
-   If depth is less than 0, no [hierarchy nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") are created and sy-subrc is set to 4.

The addition DEPTH can be used only if the addition ORPHANS is not specified or is specified as ORPHANS IGNORE.

Example

Limits the number of [hierarchy levels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") in the class CL\_DEMO\_HIERARCHY\_DEPTH. When executed, this program demonstrates how this addition works. It also shows the [hierarchy level](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") from the hierarchy column HIERARCHY\_LEVEL.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       DEPTH 1 )
       FIELDS name,
              hierarchy\_level
       INTO TABLE @FINAL(result\_1).

Addition 7   

... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED

Effect

The addition MULTIPLE PARENTS can be used to define whether the hierarchy generator is allowed to generate [child nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_node_glosry.htm "Glossary Entry") with multiple [parent nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparent_node_glosry.htm "Glossary Entry"):

-   NOT ALLOWED
    
    This is the default setting. A child node can have exactly on parent node only).
    
-   LEAVES ONLY
    
    Only [leaf nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleaf_node_glosry.htm "Glossary Entry") can have multiple parent nodes.
    
-   ALLOWED
    
    All hierarchy nodes can have multiple parent nodes.
    

Example

Creation of an SQL hierarchy in the class CL\_DEMO\_HIERARCHY\_MULTI\_PRNTS. Only leaf nodes can have multiple parents here.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A'
                       MULTIPLE PARENTS LEAVES ONLY )
       FIELDS id,
              parent,
              hierarchy\_level
       INTO TABLE @FINAL(leaves\_only).

When executed, this program demonstrates how the MULTIPLE PARENTS addition works.

-   The first SELECT statement does not specify the addition and NOT ALLOWED is applied implicitly. The hierarchy node with the ID D has three parent nodes and hence an exception is raised.
-   The next SELECT statement specifies the addition MULTIPLE PARENTS LEAVES ONLY. The hierarchy node with the ID D is a leaf node, which means the function can be accessed.
-   A child node for the row with the ID D is inserted in front of the next SELECT statement in the DDIC database table DEMO\_PARENT\_CHLD. If used, the addition MULTIPLE PARENTS LEAVES ONLY now also raises an exception.
-   The next SELECT statement specifies the addition MULTIPLE PARENTS ALLOWED and it is possible to access the table again.

Addition 8   

... ORPHANS IGNORE*|*ERROR*|*ROOT

Effect

The addition ORPHANS defines how [orphan nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenorphan_node_glosry.htm "Glossary Entry") are handled. The following categories of orphan nodes exist:

-   Hierarchy nodes that could have parent nodes according to the parent-child relationship, but the parent nodes are not in the SQL hierarchy (true orphans).
-   Hierarchy nodes that cannot be reached from the root node set using hierarchy edges.
-   Hierarchy nodes that are part of a [node cycle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennode_cycle_glosry.htm "Glossary Entry") and cannot be reached from the root node set using hierarchy nodes (island orphans).

The additions work as follows:

-   IGNORE
    
    This is the default setting. Any orphan nodes are not inserted in the SQL hierarchy.
    
-   ERROR
    
    Any orphan nodes detected raise an exception.
    
-   ROOT
    
    Orphan nodes are inserted into the SQL hierarchy as follows:
    
    -   True orphans are included in the root node set as root nodes and flagged as orphan nodes in the [hierarchy column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm) HIERARCHY\_IS\_ORPHAN.
    -   [Descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry") of true orphans are handled like those of parent nodes from the root node set, but are also flagged as orphan nodes in the [hierarchy column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm) HIERARCHY\_IS\_ORPHAN.
    -   For the hierarchy nodes of island orphans, a parent node in the root node set is generated for the child node where the cycle occurs. In the generated root node, all columns of the source hierarchy\_source contain the null value. In the [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm), the additional root node is flagged as an orphan node and PARENT\_ID also contains the null value.

Example

Handles orphan nodes in the class CL\_DEMO\_HIERARCHY\_ORPHANS.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A'
                       MULTIPLE PARENTS ALLOWED
                       ORPHANS ROOT
                       CYCLES BREAKUP )
       FIELDS CASE WHEN id IS NULL THEN '\_\_'
                   ELSE id
                   END AS id,
              CASE WHEN parent IS NULL THEN '\_\_'
                   ELSE parent
                   END AS parent,
              hierarchy\_is\_orphan,
              hierarchy\_is\_cycle,
              hierarchy\_rank,
              hierarchy\_parent\_rank,
              hierarchy\_level
       INTO TABLE @FINAL(root).

When executed, this program demonstrates how the ORPHANS addition works.

-   The first SELECT statement specifies the addition ORPHANS IGNORE. All orphan nodes are ignored and only the root node set consisting of a single root node is read and inserted in the SQL hierarchy.
-   The next SELECT statement specifies the addition ORPHANS ERROR. The SQL hierarchy would contain orphan nodes and hence an exception is raised.
-   The next SELECT statement specifies the addition ORPHANS ROOT and all orphan nodes are inserted in the SQL hierarchy:
    -   The hierarchy node with the value B in the column ID is a true orphan node. It contains a blank in the column PARENT\_ID but there is no root node with a blank in the column ID. The addition ROOT includes the hierarchy node itself in the root node set (the hierarchy column HIERARCHY\_PARENT\_RANK has the value 0) and the row is flagged as an orphan node in the hierarchy column HIERARCHY\_IS\_ORPHAN.
    -   The hierarchy node with the value C in the column ID contains the value B in the column PARENT\_ID. The parent node is an orphan node included in the root node set, which means that this hierarchy node is also flagged as an orphan node.
    -   The hierarchy node with the value X in the column ID also contains the value X in the column PARENT\_ID. The hierarchy node therefore starts a node cycle where this node is itself the parent node. It is not part of the root node set, however, which means it is an island orphan. A parent node is inserted into the root node set in which the columns of the CDS view DEMO\_CDS\_PARENT\_CHILD\_SOURCE and the hierarchy column PARENT\_ID, contain null values.
    -   The hierarchy nodes with the values U, V, and W in the column ID also comprise an island orphan. None of the hierarchy nodes in this node cycle is a root node. Again, a parent node is inserted in the root node set in which the columns of the CDS view and the hierarchy column PARENT\_ID, contain null values.

Addition 9   

... CYCLES ERROR*|*BREAKUP

Effect

The addition CYCLES defines how [node cycles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennode_cycle_glosry.htm "Glossary Entry") are defined. The additions work as follows:

-   ERROR
    
    This is the default setting. An exception is raised when a node cycle is detected.
    
-   BREAKUP
    
    The tracing of [descendant nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescendant_node_glosry.htm "Glossary Entry") is terminated at the child node where the node cycle occurs and the [hierarchy column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm) HIERARCHY\_IS\_CYCLE is set to the value 1.
    

If the addition BREAKUP is specified, MULTIPLE PARENTS ALLOWED must also be specified.

Example

Handling of node cycles in the class CL\_DEMO\_HIERARCHY\_CYCLES.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A' OR
                                   id = 'X' OR
                                   id = 'Y' OR
                                   id = 'Z'
                       MULTIPLE PARENTS ALLOWED
                       CYCLES BREAKUP )
       FIELDS id,
              parent,
              hierarchy\_is\_cycle,
              hierarchy\_level
       INTO TABLE @FINAL(breakup).

When executed, this program demonstrates how the CYCLES addition works.

-   The first SELECT statement specifies the addition CYCLES BREAKUP. Here, the root node set consists of four root nodes of the CDS view DEMO\_CDS\_PARENT\_CHILD\_SOURCE and the following node cycles are detected:
    -   The child node with the value A in the column ID is also its parent node. The hierarchy column HIERARCHY\_IS\_CYCLE contains the value 1 and no more descendant nodes are created.
    -   Starting from the hierarchy node with the value X in the column ID, child nodes are created with the values Y and Z and again X. The cycle is detected at the final child node, HIERARCHY\_IS\_CYCLE contains the value 1, and no more descendant nodes are created. The same applies to the descendant nodes starting from the root nodes with the values Y and Z.
-   The second SELECT statement specifies the addition CYCLES ERROR and raises an exception.

Addition 10   

... LOAD BULK*|*INCREMENTAL*|*load\_option

Effect

The addition LOAD specifies the load policy for the generated hierarchy. It can be used for performance optimization.

The addition works as follows:

-   BULK
    
    This is the default setting. The entire source table of the hierarchy is loaded.
    
-   INCREMENTAL
    
    Only the rows of the source table that can be reached from the start nodes ([root node set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_set_glosry.htm "Glossary Entry")) are loaded.
    
-   load\_option
    
    load\_option is an [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_type_glosry.htm "Glossary Entry") LOAD\_OPTION from the class SQL\_HIERARCHY and the following [enumerated constants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:
    
    -   SQL\_HIERARCHY=>C\_LOAD\_OPTION-BULK: equivalent to LOAD BULK.
    -   SQL\_HIERARCHY=>C\_LOAD\_OPTION-INCREMENTAL: equivalent to LOAD INCREMENTAL.

Hints

-   The performance optimization with LOAD INCREMENTAL depends on the data source. If the source table is very large and the hierarchy generator reads relatively few rows, there is a positive effect. If, on the other hand, the source table has only few rows and they are all part of the hierarchy, LOAD INCREMENTAL might even take longer than LOAD BULK.
-   LOAD INCREMENTAL should not be used with [global temporary tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm) as data source, because it does not have any positive effect then (if anything, it slows down the performance).

Executable Example

The executable example demonstrates how the addition LOAD INCREMENTAL can speed up the generation of a hierarchy.

[BULK vs INCREMENTAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_abexa.htm)

Addition 11   

... GENERATE SPANTREE

Effect

If the addition GENERATE SPANTREE is specified, the hierarchy generator inserts only child nodes without multiple parent nodes, starting from every root node. If, due to its parent-child relationships, a child node were to have multiple parent nodes after its root node, exactly one of the possible paths from the root node to this child node is selected and the child node is created for this path only.

-   If the paths have different lengths, the shortest is selected.
-   If the paths all have the same length, the first path found is selected.

If the addition GENERATE SPANTREE is specified, the following additions must be specified at the same time:

-   MULTIPLE PARENTS ALLOWED
-   ORPHANS IGNORE or ORPHANS not specified
-   CYCLES BREAKUP

Hints

-   If the parent-child relationships for the current data produce only tree-like SQL hierarchies, the addition GENERATE SPANTREE is ignored.
-   Selecting one of multiple paths to a child node does not mean that all others are completely discarded. In this case, only the edges leading to the child node are missing.
-   The addition GENERATE SPANTREE can be used to detect whether at least one path leads from a root node to a child node without the result set needing to contain all paths.
-   The addition GENERATE SPANTREE is used in an [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") to access the hierarchy generator function [HIERARCHY\_SPANTREE](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) there.

Example

Use of GENERATE SPANTREE in the class CL\_DEMO\_HIERARCHY\_SPANTREE.

SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A' OR
                                   id = 'K' OR
                                   id = 'X' OR
                                   id = 'Y'
                       MULTIPLE PARENTS ALLOWED
                       CYCLES BREAKUP
                       GENERATE SPANTREE )
       FIELDS id,
              parent
       INTO TABLE @FINAL(spantree).

When executed, this program demonstrates how the GENERATE SPANTREE addition works.

-   The first SELECT statement does not specify the addition GENERATE SPANTREE. The SQL hierarchy contains all possible paths from root nodes to child nodes.
-   The second SELECT statement specifies the addition GENERATE SPANTREE. Starting from each root node, the result set only contains one path to the potential child nodes:
    -   From the root node with the value A in ID, two paths lead to D. Only the shorter path directly from A to D is created. The connection between C and D in the longer path is not created.
    -   From the root node with the value A in ID, two paths lead to N. Only one of the two paths from L to N or M to N is created.
    -   The child node with the value Z in ID has two parent nodes X and Y. Since both are root nodes, both paths are created.

Continue
![Example](exa.gif "Example") [SELECT, Hierarchy Generator, BULK vs. INCREMENTAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_abexa.htm)