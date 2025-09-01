  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Replacement Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_replacement_objects.htm) → 

DDIC - Replacement Object for Database Table

This example demonstrates a DDIC database table with a [replacement object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_table\_replacement\_object.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Aggregate table (GTT)
    SELECT FROM demo\_sumdist\_agg
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_agg).
    DELETE FROM demo\_sumdist\_agg.
    "Table with replacement object
    SELECT FROM demo\_sumdist
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result).
    ASSERT result = result\_agg.
    "Direct access to CDS view
    SELECT FROM demo\_cds\_sumdist
           FIELDS @sy-mandt AS mandt, demo\_cds\_sumdist~\*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_cds).
    ASSERT result\_cds = result.
    out->write( result ).
    "Classic view on demo\_sumdist without replacement object
    SELECT FROM demo\_sumdist\_obs
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_view\_obs).
    IF result <> result\_view\_obs.
      out->write(
        'Classic view without replacement object differs.' ).
    ENDIF.
    "Classic view on demo\_sumdist with replacement object
    SELECT FROM demo\_sumdistview
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_view).
    IF result =  result\_view.
      out->write(
        'Classic view with replacement object is the same.' ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
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
START-OF-SELECTION.
  demo=>main( ).

Description

This program accesses two DDIC database tables, DEMO\_SUMDIST\_AGG and DEMO\_SUMDIST. These tables are identical except for the fact that the [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SUMDIST is defined as a [replacement object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_replacement_objects.htm) for DEMO\_SUMDIST.

The DDIC database table DEMO\_SUMDIST\_AGG is filled with aggregated data (done here in the static constructor of the class demo). When DEMO\_SUMDIST is accessed, the replacement object performs exactly the same aggregation:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SUDI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sumdist(
    client,
    carrname,
    distid,
    sum\_distance
  )
  as select from
           scarr as s
      join spfli as p on
        s.carrid = p.carrid
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

Similar access to the DDIC database tables produce similar results, which can be verified using the statement [ASSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm).

A third SELECT statement accesses the [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SUMDIST directly. To produce the same result set for the comparison with the other results as when accessing the DDIC database tables, the [client column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_column_glosry.htm "Glossary Entry") must be added, since the result set of a [client-dependent CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_dependent_glosry.htm "Glossary Entry") does not contain a column of this type.

A [DDIC database view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_view_glosry.htm "Glossary Entry") DEMO\_SUMDIST\_OBS contains the DDIC database table DEMO\_SUMDIST as a basis table. There is no redirect to the replacement object of DEMO\_SUMDIST in a SELECT. A DDIC database view DEMO\_SUMDISTVIEW that is otherwise similar has the following CDS view as a replacement object:

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