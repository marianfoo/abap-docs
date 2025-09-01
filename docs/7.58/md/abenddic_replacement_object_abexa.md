---
title: "DDIC - Replacement Object for Database Table"
description: |
  This example demonstrates a DDIC database table with a replacement object(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreplacement_object_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_table_rplcmnt_object DEFINITION INHERITING FROM cl_dem
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_object_abexa.htm"
abapFile: "abenddic_replacement_object_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abenddic", "replacement", "object", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Replacement Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Replacement%20Object%20for%20Database%20Table%2C%20ABENDDIC_REPLACEMENT_OBJECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

DDIC - Replacement Object for Database Table

This example demonstrates a DDIC database table with a [replacement object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_table\_rplcmnt\_object DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_table\_rplcmnt\_object IMPLEMENTATION.
  METHOD main.
    "Aggregate table (GTT)
    SELECT FROM demo\_sumdist\_agg
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_agg).
    DELETE FROM demo\_sumdist\_agg.
    "Table with replacement object
    SELECT FROM demo\_sumdist
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result).
    ASSERT result = result\_agg.
    "Direct access to CDS view
    SELECT FROM demo\_cds\_sumdist
           FIELDS @sy-mandt AS mandt, demo\_cds\_sumdist~\*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_cds).
    ASSERT result\_cds = result.
    out->write( result ).
    "Classic view on demo\_sumdist without replacement object
    SELECT FROM demo\_sumdist\_obs
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_view\_obs).
    IF result <> result\_view\_obs.
      out->write(
        'Classic view without replacement object differs.' ).
    ENDIF.
    "Classic view on demo\_sumdist with replacement object
    SELECT FROM demo\_sumdistview
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_view).
    IF result =  result\_view.
      out->write(
        'Classic view with replacement object is the same.' ).
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_sumdist\_agg.
    INSERT demo\_sumdist\_agg FROM
      ( SELECT
          FROM scarr AS s
            INNER JOIN spfli AS p ON s~carrid = p~carrid
          FIELDS s~carrname,
                 p~distid,
                 SUM( p~distance ) AS sum\_distance
          GROUP BY s~mandt, s~carrname, p~distid ).
  ENDMETHOD.
ENDCLASS.

Description   

This class accesses two DDIC database tables, DEMO\_SUMDIST\_AGG and DEMO\_SUMDIST. These tables are identical except for the fact that the [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SUMDIST is defined as a [replacement object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_objects.htm) for DEMO\_SUMDIST.

The DDIC database table DEMO\_SUMDIST\_AGG is filled with aggregated data (done here in the static constructor of the class demo). When DEMO\_SUMDIST is accessed, the replacement object performs exactly the same aggregation:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SUDI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sumdist(
    client,
    carrname,
    distid,
    sum\_distance
  )
  as select from scarr as s
    join         spfli as p on s.carrid = p.carrid
{
  key s.mandt,
  key s.carrname,
  key p.distid,
      sum(p.distance)
}
group by
  s.mandt,
  s.carrname,
  p.distid

Both similar accesses to the DDIC database tables produce the same results, which is verified using the statement [ASSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm).

A third SELECT statement accesses the [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SUMDIST directly. To produce the same result set as when accessing the DDIC database tables, a [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") must be added, since the result set of a [client-dependent CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_dependent_glosry.htm "Glossary Entry") does not contain a client column.

A [DDIC database view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_view_glosry.htm "Glossary Entry") DEMO\_SUMDIST\_OBS contains the DDIC database table DEMO\_SUMDIST as a basis table. There is no redirect to the replacement object of DEMO\_SUMDIST in a SELECT. A DDIC database view DEMO\_SUMDISTVIEW that is otherwise similar has the following CDS view as a replacement object:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SUDIV'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sumdistview
  as select from
    demo\_cds\_sumdist
    {
      key client,
      key carrname,
      key distid,
          sum\_distance
    }

This view accesses the replacement object of the DDIC database table DEMO\_SUMDIST. When DEMO\_SUMDISTVIEW is accessed using SELECT, its replacement object is evaluated and the result again matches the preceding result.