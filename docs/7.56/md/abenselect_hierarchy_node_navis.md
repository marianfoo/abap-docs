  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) → 

SELECT, FROM hierarchy\_node\_navigator

Syntax

... *{*HIERARCHY\_DESCENDANTS
    *|*HIERARCHY\_ANCESTORS
    *|*HIERARCHY\_SIBLINGS*}*(
       SOURCE [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
       START WHERE [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))
      *\[*DISTANCE *\[*FROM n1*\]* *\[*TO n2*\]**\]* ) ...

Variants:

[1\. HIERARCHY\_DESCENDANTS( ... )](#!ABAP_VARIANT_1@1@)
[2\. HIERARCHY\_ANCESTORS( ... )](#!ABAP_VARIANT_2@2@)
[3\. HIERARCHY\_SIBLINGS( ... )](#!ABAP_VARIANT_3@3@)

Addition:

[... DISTANCE *\[*FROM n1*\]* *\[*TO n2*\]*](#!ABAP_ONE_ADD@1@)

Effect

Specifies a [hierarchy node navigator](javascript:call_link\('abenhierarchy_node_navi_glosry.htm'\) "Glossary Entry") as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). It accesses and evaluates the [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) specified after SOURCE.

After START WHERE, a logical expression [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)) must be specified that contains conditions for [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") of the SQL hierarchy after SOURCE. The columns of the hierarchy can also be used as operands here. Any hierarchy nodes that meet the conditions are the [start nodes](javascript:call_link\('abenstart_node_glosry.htm'\) "Glossary Entry") of the hierarchy navigators. They evaluate the SQL hierarchy [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) specified after SOURCE, starting from all start nodes, and insert the selected hierarchy nodes into their result set.

In addition to the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified after SOURCE, the result set of each of these hierarchy navigators contains two further hierarchy columns:

-   START\_RANK with the type INT8
-   START\_ID with the type SSTRING and length 1333

In each row of the result set, these columns contain the values of the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) HIERARCHY\_RANK and NODE\_ID of the associated start nodes.

Variant 1   

HIERARCHY\_DESCENDANTS( ... )

Effect

The hierarchy navigator HIERARCHY\_DESCENDANTS selects all [descendant nodes](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry") of the [start nodes](javascript:call_link\('abenstart_node_glosry.htm'\) "Glossary Entry") and the start nodes themselves, from the SQL hierarchy [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) specified after SOURCE. In addition the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified after SOURCE, plus START\_RANK and START\_ID, the result set contains a further hierarchy column, HIERARCHY\_DISTANCE, with the type INT4, which contains the distance to the respective start node. This distance is the positive difference between the hierarchy levels HIERARCHY\_LEVEL of the individual [child nodes](javascript:call_link\('abenchild_node_glosry.htm'\) "Glossary Entry") and the respective start nodes.

Example

Call of the hierarchy navigator HIERARCHY\_DESCENDANTS in the program DEMO\_HIERARCHY\_NAVIGATORS, where the hierarchy generator HIERARCHY is specified as the source. When executed, this program demonstrates how this hierarchy navigator works. It also displays the value of the hierarchy column HIERARCHY\_DISTANCE.

DATA(id) = 6.
SELECT FROM HIERARCHY\_DESCENDANTS(
              SOURCE HIERARCHY(
                       SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       SIBLINGS ORDER BY id ASCENDING )
             START WHERE id = @id )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_distance
         INTO TABLE @DATA(descendants).

Variant 2   

HIERARCHY\_ANCESTORS( ... )

Effect

The hierarchy navigator HIERARCHY\_ANCESTORS selects all [ancestor nodes](javascript:call_link\('abenancestor_node_glosry.htm'\) "Glossary Entry") of the [start nodes](javascript:call_link\('abenstart_node_glosry.htm'\) "Glossary Entry"), as well as the start nodes themselves, from the SQL hierarchy specified after SOURCE. In addition to the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified after SOURCE, plus START\_RANK and START\_ID, the result set contains a further hierarchy column, HIERARCHY\_DISTANCE, with the type INT4, which contains the distance to the respective start node. This distance is the negative difference between the hierarchy levels HIERARCHY\_LEVEL of the individual [parent nodes](javascript:call_link\('abenparent_node_glosry.htm'\) "Glossary Entry") and the respective start nodes.

Example

Call of the hierarchy navigator HIERARCHY\_ANCESTORS in the program DEMO\_HIERARCHY\_NAVIGATORS, where the CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE is specified as a source. When executed, this program demonstrates how this hierarchy navigator works. It also displays the value of the additional hierarchy column HIERARCHY\_DISTANCE.

DATA(id) = 6.
SELECT FROM HIERARCHY\_ANCESTORS(
              SOURCE demo\_cds\_simple\_tree( p\_id = 1 )
              START WHERE id = @id )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_distance
       INTO TABLE @DATA(ancestors).

Variant 3   

HIERARCHY\_SIBLINGS( ... )

Effect

The hierarchy navigator HIERARCHY\_SIBLINGS selects all [sibling nodes](javascript:call_link\('abensibling_node_glosry.htm'\) "Glossary Entry") of the [start nodes](javascript:call_link\('abenstart_node_glosry.htm'\) "Glossary Entry"), as well as the start nodes themselves, from the SQL hierarchy specified after SOURCE. In addition to the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified after SOURCE, plus START\_RANK and START\_ID, the result set contains a further hierarchy column, HIERARCHY\_SIBLING\_DISTANCE, with the type INT4, which contains the distance to the respective start node. This is the positive or negative difference between the numbers HIERARCHY\_RANK of the sibling nodes and the respective start nodes.

Hint

If the values in the additional column HIERARCHY\_SIBLING\_DISTANCE are accessed, the addition SIBLINGS ORDER BY should be used in the SQL hierarchy specified after SOURCE. Otherwise, the values remain undefined.

Example

Call of the hierarchy navigator HIERARCHY\_SIBLINGS in the program DEMO\_HIERARCHY\_NAVIGATORS, where the [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry") +hierarchy is specified a source. When executed, this program demonstrates how this hierarchy navigator works. It also displays the value of the additional hierarchy column HIERARCHY\_SIBLING\_DISTANCE.

DATA(id) = 6.
WITH +hierarchy AS (
        SELECT FROM HIERARCHY(
                      SOURCE demo\_cds\_simple\_tree\_source
                      CHILD TO PARENT ASSOCIATION \_tree
                      START WHERE id = 1
                      SIBLINGS ORDER BY id ASCENDING ) AS hierarchy
               FIELDS id,
                      parent ) WITH HIERARCHY hierarchy
  SELECT FROM HIERARCHY\_SIBLINGS(
                SOURCE +hierarchy
                START WHERE id = @id )
         FIELDS id,
                parent\_id,
                hierarchy\_rank,
                hierarchy\_level,
                hierarchy\_tree\_size,
                hierarchy\_sibling\_distance
         INTO TABLE @DATA(siblings).

Addition   

... DISTANCE *\[*FROM n1*\]* *\[*TO n2*\]*

Effect

In the case of the hierarchy navigators HIERARCHY\_DESCENDANTS and HIERARCHY\_ANCESTORS, the addition DISTANCE restricts the distance to the respective [start node](javascript:call_link\('abenstart_node_glosry.htm'\) "Glossary Entry"). The addition DISTANCE cannot be specified for the hierarchy navigator HIERARCHY\_SIBLINGS.

At least one of the additions FROM or TO must be specified in the order shown. n1 and n2 expect [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)), [host expressions](javascript:call_link\('abenabap_sql_literals.htm'\)), or [literals](javascript:call_link\('abenabap_sql_literals.htm'\)) with the type i. Only the types b, s, or i can be used. Only those hierarchy nodes are selected for which the value of the hierarchy column HIERARCHY\_DISTANCE is between the values of n1 and n2. If the value of n1 is greater than n2, no hierarchy node is selected. If TO, is not specified, there is no upper limit. If FROM, is not specified, there is no lower limit.

Hints

-   The function of the addition DISTANCE can also be achieved using the comparison operator [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\)) for the hierarchy column HIERARCHY\_DISTANCE. In this case, the selection is applied to the result set of the hierarchy navigator rather than being performed by the navigator itself.
-   To get hierarchy nodes in the result set of HIERARCHY\_DESCENDANTS, the interval boundaries must include positive values. To get hierarchy nodes in the result set of HIERARCHY\_ANCESTORS, the interval boundaries must include negative values.
-   To exclude the start nodes from the result set, the additions FROM and TO can be used as follows:
    -   If FROM 1 is specified without the addition TO, HIERARCHY\_DESCENDANTS selects only [descendant nodes](javascript:call_link\('abendescendant_node_glosry.htm'\) "Glossary Entry")
    -   If TO -1 is specified without the addition FROM, HIERARCHY\_ANCESTORS selects only the [ancestor nodes](javascript:call_link\('abenancestor_node_glosry.htm'\) "Glossary Entry")

Example

Call of the hierarchy navigator HIERARCHY\_DESCENDANTS in the program DEMO\_HIERARCHY\_DISTANCE while specifying the addition DISTANCE. When executed, this program demonstrates how this addition works. If, for example, the value 2 is specified for n1 and 3 is specified for n2, only the grandchildren nodes and great-grandchildren nodes of the start node are selected. If \-3 is specified for n1 and \-2 is specified for n2, the result set of HIERARCHY\_DESCENDANTS is empty. For these values, on the other hand, the result set of HIERARCHY\_ANCESTORS contains the grandparents and great-grandparents of the start node.

DATA(id) = 1.
DATA(n1) = 2.
DATA(n2) = 3.
SELECT FROM HIERARCHY\_DESCENDANTS(
              SOURCE HIERARCHY(
                       SOURCE demo\_cds\_simple\_tree\_source
                       CHILD TO PARENT ASSOCIATION \_tree
                       START WHERE id = 1
                       SIBLINGS ORDER BY id ASCENDING )
            START WHERE id = @id
            DISTANCE FROM @n1 TO @n2 )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_distance
       INTO TABLE @DATA(descendants).