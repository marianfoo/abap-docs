  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Path Expressions sql\_path](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Path%20Expressions%2C%20Use%20in%20the%20FROM%20Clause%2C%20ABENPATH_EXPR_IN_FROM_CLAUSE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

Path Expressions, Use in the FROM Clause

This example demonstrates [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path.htm) in the [FROM clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) in ABAP SQL.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_from\_path DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_from\_path IMPLEMENTATION.
  METHOD main.
    DATA:
      tz     TYPE s\_tzone    VALUE 'UTC+1',
      currc  TYPE s\_currcode VALUE 'EUR',
      fltime TYPE s\_fltime   VALUE 0.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = tz
      )->add\_field( CHANGING field = currc
      )->add\_field( CHANGING field = fltime )->request( ).
    "Path expression in ABAP SQL
    SELECT DISTINCT carrname
           FROM demo\_cds\_assoc\_sairport\_tz( tz = @( to\_upper( tz ) ) )
                \\\_spfli\[ fltime > @fltime \]
                \\\_scarr\[ currcode = @( CONV s\_currcode(
                                              to\_upper( currc ) ) ) \]
                AS scarr
           ORDER BY carrname
           INTO TABLE @FINAL(result\_path).
    "Joins in ABAP SQL
    SELECT DISTINCT scarr~carrname
           FROM demo\_cds\_assoc\_sairport\_tz( tz = @( to\_upper( tz ) ) )
                  AS airports
             INNER JOIN demo\_cds\_assoc\_spfli\_scarr AS flights
               ON  flights~airpfrom = airports~id AND
                   flights~fltime > @fltime
             INNER JOIN scarr
               ON  scarr~carrid   = flights~carrid AND
                   scarr~currcode = @( to\_upper( currc ) )
           ORDER BY scarr~carrname
           INTO TABLE @FINAL(result\_join).
    ASSERT result\_path = result\_join.
    out->write( result\_path ).
  ENDMETHOD.
ENDCLASS.

Description   

The first SELECT statement accesses the CDS view entity demo\_cds\_assoc\_sairport\_tz:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_sairport\_tz
  with parameters
    tz : s\_tzone
  as select from sairport
  association of many to many demo\_cds\_assoc\_spfli\_scarr as \_spfli on
    sairport.id = \_spfli.airpfrom
  {
    \_spfli,
   key id
  }
  where
    time\_zone = $parameters.tz

This view entity exposes its [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") \_spfli in its SELECT list. The CDS association \_spfli uses the view entity demo\_cds\_assoc\_spfli\_scarr as an [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry"):

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_assoc\_spfli\_scarr
  as select from
    spfli
    association to scarr as \_scarr on
      spfli.carrid = \_scarr.carrid
    {
      \_scarr,
      key carrid,
      key airpfrom,
          fltime
    }

This view exposes its [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") \_scarr in its SELECT list, making it possible to specify it in path expressions after \_spfli. This CDS association uses a DDIC database table as a data source and always closes a path expression.

In the [FROM clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm), the first SELECT statement uses a path expression with the CDS associations \\\_spfli and \\\_scarr after the name of the CDS view. The names of all carriers are read that depart from airports in a specific time zone. The time zone is a [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_func_parameter_list.htm) of CDS view demo\_cds\_assoc\_sairport\_tz, and a value is passed to it. Further restrictions apply to the local currency of the airline in a filter condition for the CDS association \_scarr and on the flight time in a filter condition for the CDS association \_spfli

The second SELECT statement demonstrates which joins and conditions must be created in ABAP SQL to achieve the same result. This is guaranteed by an assertion.