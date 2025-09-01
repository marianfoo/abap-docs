  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) →  [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20cardinality%2C%20ABENCDS_CARDINALITY_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CDS DDL - CDS View Entity, cardinality

Syntax Forms

Cardinality Syntax Written in Words

OF *{**{*EXACT ONE*}* *|* MANY *|* ONE*}* TO *{**{*EXACT ONE*}* *|* MANY *|* ONE*}*

Numeric Syntax

\[min..max\]

Alternatives:

[1\. OF *{*EXACT ONE *|* MANY *|* ONE*}* TO *{*EXACT ONE *|* MANY *|* ONE*}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... \[min..max\] ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifies a [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") to express the relation between the rows of the data sources. The following options are available:

-   The cardinality can be written in words. In this case, a [source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_cardinality_glosry.htm "Glossary Entry") and a [target cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentarget_cardinality_glosry.htm "Glossary Entry") can be specified. This syntax variant is the recommended option.
-   The cardinality can be specified in numbers in square brackets. In this case, the minimum and maximum cardinality of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") is specified. No source cardinality can be specified. The implicit default source cardinality is MANY.
-   The cardinality is optional and can be left out. In this case, the implicit default is many-to-one. SAP recommends always specifying the cardinality explicitly.

A cardinality is specified to document the semantics of the data model. Moreover, the SAP HANA database uses the cardinality for performance optimizations. Left outer joins (LEFT OUTER JOIN) produced by [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) are given the addition TO ONE if an explicit or implicit to-one cardinality is used and the addition TO MANY if any other cardinality is used. These additions work in the same way as when they are specified explicitly in [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v2.htm). This means that an optimization is attempted and the result can be undefined if the result set does not match the cardinality.

If no cardinality is specified, the implicit default cardinality is MANY TO ONE.

Hints

-   To avoid undefined behavior, the cardinality should always be defined to match the data in question.
-   The specified cardinality is evaluated by the syntax check in the CDS DDL of CDS or in ABAP SQL. A non-matching cardinality usually produces a syntax check warning.
-   The numeric syntax and the syntax written in words must not be mixed. It is not possible, for example, to specify the source cardinality of an association in words and the target cardinality of the same association in numbers.

Example

The following example shows how an incorrect cardinality leads to unexpected results. A CDS view entity joins the DDIC database tables SCARR and SPFLI in a CDS association \_spfli without specifying the cardinality explicitly. The implicitly set cardinality is MANY TO ONE. If the CDS association is used in a path specified in the SELECT list, this is implemented on the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") as a left outer join using the addition MANY TO ONE. The actual cardinality of the data is, however, TO MANY.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_WRONG\_CARDINALITY\_1
  as select from scarr
  association to spfli as \_spfli on \_spfli.carrid = scarr.carrid
{
  key scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
}

The class CL\_DEMO\_CDS\_WRONG\_CRDNLTY\_1 uses different SELECT statements to access the view. The two reads return a different number of rows. This shows that the cardinality should always be defined explicitly to match the data in question to avoid unexpected behavior.

Example

The following CDS view entity joins the DDIC database tables SCARR and SPFLI in a CDS association \_spfli while specifying the cardinality explicitly and correctly. If the CDS association is used in a path specified in the SELECT list, this is implemented on the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") as a left outer many-to-many join. This matches the actual cardinality of the data.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPLICIT\_CARD\_1
  as select from scarr
  association of many to many spfli as \_spfli  
    on \_spfli.carrid = scarr.carrid
{
  key scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
}

The class CL\_DEMO\_CDS\_EXPLICIT\_CARD\_1 uses different SELECT statements to access the view. The two reads return the same number of rows.

Alternative 1   

OF *{*EXACT ONE *|* MANY *|* ONE*}* TO *{*EXACT ONE *|* MANY *|* ONE*}*

Effect

The cardinality written in words specifies the source and target cardinality, that means, how many entries of the data source match the entries of the association target. The following cardinality specifications are possible:

-   OF EXACT ONE TO EXACT ONE
-   OF EXACT ONE TO MANY
-   OF EXACT ONE TO ONE
-   OF MANY TO EXACT ONE
-   OF MANY TO MANY
-   OF MANY TO ONE
-   OF ONE TO EXACT ONE
-   OF ONE TO MANY
-   OF ONE TO ONE

Hints

-   SAP recommends using the cardinality syntax written in words instead of the numeric syntax, since it improves query performance in some scenarios.
-   Further details can be found on SAP Help Portal in the SAP HANA SQL Reference Guide for SAP HANA Platform.
-   In case of [to-child associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry"), the source cardinality must be set to EXACT ONE. It can also be left out and is then implicitly set to EXACT ONE. No other source cardinality is valid for to-child associations.
-   The cardinality syntax written in words is available in [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry"), [CDS custom entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"), and [CDS abstract entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). It is not available in any other CDS entity.

Example

The following CDS view entity defines an association with the cardinality EXACT ONE TO ONE to a text provider view.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, card in words'
define view entity DEMO\_CDS\_CARDINALITY\_IN\_WORDS
  as select from demo\_sales\_mat
  association of exact one to one DEMO\_SALES\_CDS\_MAT\_TEXT as \_Text  
    on  $projection.material = \_Text.material
    and \_Text.language       = $session.system\_language
{
  key matnr as material,
      mtart as material\_type,
      mtgrp as material\_group,
      \_Text,
      \_Text.material\_name
}

The SQL statement generated on the database shows that the path expression is transformed into a left outer exact one to one join on the database.

![Figure](exact_one.jpg)

Alternative 2   

... \[min..max\] ...

Effect

The numeric syntax specifies the cardinality of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a CDS view entity. The square brackets \[ \] are part of the syntax. For min and max, positive integers (including 0) and asterisks (\*) can be specified:

-   max cannot be 0.
-   An asterisk \* for max means any number of rows.
-   min can be omitted (set to 0 if omitted).
-   min cannot be \*.
-   When a CDS association is used in a [WHERE condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_clause_v2.htm), 1 must be specified for max.

If the cardinality is not defined explicitly, the cardinality to-one is used implicitly (\[min..1\]).

With the numeric syntax, no source cardinality can be specified, only the cardinality of the association target. The target cardinality can be specified with high precision, since the exact number of data records returned by an association can be specified. In the SQL statement that is generated on the database, the numeric syntax is translated into words.

Hint

SAP recommends using the cardinality syntax written in words instead of the numeric syntax, since it improves query performance in some scenarios.

Example

The following CDS view entity specifies the cardinality of the association target as to-many using the syntax \[\*\].

@EndUserText.label: 'CDS view entity, numeric cardinality'
define view entity DEMO\_CDS\_CAR\_NUMERIC
  as select from spfli
  association \[\*\] to sflight as \_Flights  
    on  $projection.carrid = \_Flights.carrid
    and $projection.connid = \_Flights.connid
{
  key carrid,
  key connid,
      \_Flights.fldate
}

The SQL statement generated on the database shows that the path expression is transformed into a left outer join. The SQL statement does not contain an explicit cardinality, which means that the implicit default cardinality MANY TO MANY is used.

![Figure](num_car_jpg)