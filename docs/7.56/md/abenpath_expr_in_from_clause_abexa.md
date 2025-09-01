  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL path expressions sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) → 

Path Expressions, Use in the FROM Clause

This example demonstrates [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) in the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) in ABAP SQL.

Source Code

REPORT demo\_select\_from\_path.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
           INTO TABLE @DATA(result\_path).
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
           INTO TABLE @DATA(result\_join).
    ASSERT result\_path = result\_join.
    cl\_demo\_output=>display( result\_path ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The first SELECT statement accesses the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") demo\_cds\_assoc\_sairport\_tz:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASCSRTZ'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_sairport\_tz
  with parameters
    tz : s\_tzone
  as select from sairport
  association \[\*\] to demo\_cds\_assoc\_spfli\_scarr as \_spfli on
    sairport.id = \_spfli.airpfrom
  {
    \_spfli,
   key id
  }
  where
    time\_zone = :tz

This view exposes its [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") \_spfli in its SELECT list. The CDS association \_spfli uses the view demo\_cds\_assoc\_spfli\_scarr as an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"):

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASCSPSC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_spfli\_scarr
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

This view exposes its [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") \_scarr in its SELECT list, making it possible to specify it in path expressions after \_spfli. This CDS association uses a DDIC database table as a data source and always closes a path expression.

In the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)), the first SELECT statement uses a path expression with the CDS associations \\\_spfli and \\\_scarr after the name of the CDS view. The names of all carriers are read that depart from airports in a specific time zone. The time zone is a [parameter](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of CDS view demo\_cds\_assoc\_sairport\_tz, and a value is passed to it. Further restrictions apply to the local currency of the airline in a filter condition for the CDS association \_scarr and on the flight time in a filter condition for the CDS association \_spfli

The second SELECT statement demonstrates which joins and conditions must be created in ABAP SQL to achieve the same result. This is guaranteed by an assertion.