  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v1.htm) → 

CDS DDL - DDIC-Based View, Associations and Joins

This topic describes the different use cases of CDS associations. It explains in which use case a join is generated on the database and which [join type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_type_glosry.htm "Glossary Entry") is generated each time. Examples and screenshots of the SQL statement generated on the database are provided to further illustrate the transformation into joins.

When a CDS association is instantiated as join on the database, then the [association source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_source_glosry.htm "Glossary Entry") represents the left side and the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") represents the right side of the join. The ON condition of the association is added to the ON condition of the join.

There are the following basic use cases for CDS associations:

-   [Using a path expression in the FROM clause](#@@ITOC@@ABENCDS_ASSOC_JOIN_V1_1)
-   [Exposing a CDS association](#@@ITOC@@ABENCDS_ASSOC_JOIN_V1_2)
-   [Adding a field from the association target to the element list](#@@ITOC@@ABENCDS_ASSOC_JOIN_V1_3)
-   [Using a path expression in the WHERE clause](#@@ITOC@@ABENCDS_ASSOC_JOIN_V1_4)
-   [Using an exposed association in an external view](#@@ITOC@@ABENCDS_ASSOC_JOIN_V1_5)
-   [Using an exposed association in ABAP SQL](#@@ITOC@@ABENCDS_ASSOC_JOIN_V1_6)

Using a path expression in the FROM clause

Use case: the data source of a CDS view entity after FROM is specified as path expression.

Example:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_from
  as select from demo\_cds\_assoc\_spfli.\_sflight
{  
  key carrid,
      connid  
}

SQL statement generated on the database:

![Figure](bdoc_assoc_6.png)

The SQL statement generated on the database shows that the path expression is transformed into an [inner join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninner_join_glosry.htm "Glossary Entry") on the database.

Exposing a CDS association

Use case: an association is defined and exposed in the element list of a CDS view entity. In this way, it can be used in other CDS entities. However, the association is not part of the output and no data is selected from the association target.

Example:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_exposition
  as select from scarr
  association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli  
    on scarr.carrid = \_spfli.carrid
{
      \_spfli,
  key carrid,
      carrname
}

SQL statement generated on the database:

![Figure](bdoc_assoc_1.png)

The SQL statement generated on the database shows that no join is generated and that the association is not mentioned in the statement that is passed to the database.

Adding a field from the association target to the element list

Use case: an association is defined and an element from the association target is included in the element list of the same CDS view entity. In this example, the association is used, but not exposed, and therefore it cannot be used in path expressions of other CDS entities.

Example:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_element
  as select from scarr
  association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli  
    on scarr.carrid = \_spfli.carrid
{
  key carrid,  
      \_spfli.connid,
      carrname
}

SQL statement generated on the database:

![Figure](bdoc_assoc_2.png)

The SQL statement generated on the database shows that the path expression is transformed into a [left outer join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") on the database.

Using a path expression in the WHERE clause

Use case: an association is defined and used in the WHERE condition of the same CDS view entity. In this example, the association is used, but not exposed, and therefore it cannot be used in path expressions of other CDS entities.

Example:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_where
  as select from scarr
  association to demo\_cds\_assoc\_spfli as \_spfli  
    on scarr.carrid = \_spfli.carrid
{
  key carrid,  
      carrname
} where \_spfli.connid = '....'

SQL statement generated on the database:

![Figure](bdoc_assoc_3.png)

The SQL statement generated on the database shows that the path expression is transformed into a [left outer join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") with the cardinality many to one.

Using an exposed association in an external view

Use case: A CDS view entity uses an association that was defined and published in another CDS entity. The association is used in a path expression to include a field from the association target in the element list of the CDS view entity.

Example:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_external\_usage
  as select from
    demo\_cds\_assoc\_exposition  
    {
      carrid,
      carrname,  
      \_spfli.connid
    }

SQL statement generated on the database:

![Figure](bdoc_assoc_4.png)

The SQL statement generated on the database shows that the path expression is transformed into a [left outer join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") on the database. Note that this happens in the view that uses the association, and not in the view that defines the association.

Using an exposed association in ABAP SQL

Use case: The program DEMO\_CDS\_SELECT\_ASSOC uses an association that was defined and published in a CDS view entity in a path expression in ABAP SQL.

Example:

REPORT demo\_cds\_select\_assoc.
CLASS demo DEFINITION
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT carrid,
           carrname,
           /\_spfli\[ (\*) \]-connid
           FROM demo\_cds\_assoc\_exposition
           INTO TABLE @DATA(result).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

SQL statement generated on the database:

![Figure](bdoc_assoc_5.png)

The path expression is transformed into a [left outer join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") on the database.