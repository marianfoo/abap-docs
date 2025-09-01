  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL path expressions sql\_path](javascript:call_link\('abenopen_sql_path.htm'\)) → 

Path Expressions, Use in the SELECT List

This example demonstrates [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) in ABAP SQL.

Source Code

REPORT demo\_cds\_association\_path.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE scarr-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    "Path expressions in Open SQL
    SELECT scarr~carrname,
           \\\_spfli\[ (\*) \]-connid AS connid,
           \\\_spfli\[ (\*) \]\\\_sflight\[ (\*) \]-fldate AS fldate,
           \\\_spfli\[ (\*) \]\\\_sairport-name AS name
           FROM demo\_cds\_assoc\_scarr AS scarr
           WHERE scarr~carrid = @carrid
           ORDER BY carrname, connid, fldate
           INTO TABLE @DATA(result1).
    "Joins in Open SQL
    SELECT demo\_cds\_assoc\_scarr~carrname,
           demo\_cds\_assoc\_spfli~connid,
           sflight~fldate AS fldate,
           sairport~name  AS name
           FROM demo\_cds\_assoc\_scarr
             LEFT OUTER JOIN demo\_cds\_assoc\_spfli
               ON demo\_cds\_assoc\_spfli~carrid =
                    demo\_cds\_assoc\_scarr~carrid
             LEFT OUTER JOIN demo\_cds\_sflight AS sflight
               ON sflight~carrid = demo\_cds\_assoc\_spfli~carrid AND
                  sflight~connid = demo\_cds\_assoc\_spfli~connid
             LEFT OUTER JOIN demo\_cds\_sairport as sairport
               ON sairport~id = demo\_cds\_assoc\_spfli~airpfrom
           WHERE demo\_cds\_assoc\_scarr~carrid = @carrid
           ORDER BY demo\_cds\_assoc\_scarr~carrname,
                    demo\_cds\_assoc\_spfli~connid,
                    fldate
           INTO TABLE @DATA(result2).
    ASSERT result1 = result2.
    "Path expressions in CDS
    SELECT \*
       FROM demo\_cds\_use\_assocs( p\_carrid = @carrid )
       ORDER BY carrname, connid, fldate
       INTO TABLE @DATA(result3).
    ASSERT result1 = result3.
    "Joins in CDS
    SELECT \*
       FROM demo\_cds\_outer\_joins( p\_carrid = @carrid )
       ORDER BY carrname, connid, fldate
       INTO TABLE @DATA(result4).
    ASSERT result1 = result4.
    cl\_demo\_output=>display( result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The first SELECT statement accesses the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") demo\_cds\_assoc\_scarr:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASC\_CAR'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_scarr
  as select from scarr
  association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli on
    scarr.carrid = \_spfli.carrid
  {
    \_spfli,
    key carrid,
    carrname
  }

This view exposes its [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") \_spfli in its SELECT list. The CDS association \_spfli uses the view demo\_cds\_assoc\_spfli as an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"):

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASC\_SPF'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_spfli  
  as select from
    spfli
    association \[1..\*\] to demo\_cds\_sflight as \_sflight on
          spfli.carrid = \_sflight.carrid
      and spfli.connid = \_sflight.connid
    association \[1..1\] to demo\_cds\_sairport as \_sairport on
      spfli.airpfrom = \_sairport.id
    {
      \_sflight,
      \_sairport,
      key carrid,
      key connid,
      airpfrom
    }

This view exposes its [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") \_sflight and \_sairport in its SELECT list, making it possible to specify them in path expressions after \_spfli. These CDS associations use wrappers of DDIC database tables as data sources.

The SELECT statement contains three path expressions in its SELECT list alongside an elementary column specification. The first association contains only the CDS association \_spfli of the CDS view demo\_cds\_assoc\_scarr specified after FROM. The CDS associations of the data source of the root element are added to the other two path expressions. The path expressions specify the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the associations, which prevents syntax check warnings indicating that the path expressions affect the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the result set.

The second SELECT statement demonstrates which joins must be created in ABAP SQL to achieve the same result. This is guaranteed by an assertion.

The third SELECT statement accesses the CDS view demo\_cds\_use\_assocs:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_USE\_ASC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_use\_assocs
  with parameters
    p\_carrid :s\_carrid
  as select from
    demo\_cds\_assoc\_scarr as scarr
    {
      scarr.carrname,
      scarr.\_spfli.connid,
      scarr.\_spfli.\_sflight.fldate,
      scarr.\_spfli.\_sairport.name
    }
    where
      scarr.carrid = :p\_carrid

This view shows how the same paths specified in the SELECT statement of the view in [CDS DDL syntax](javascript:call_link\('abencds_path_expression_v1.htm'\)) and also achieves the same result.

Finally, a fourth SELECT statement accesses the CDS view demo\_cds\_outer\_joins:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_OUTJOIN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_outer\_joins
  with parameters
    p\_carrid :s\_carrid
  as select from
                      demo\_cds\_assoc\_scarr
      left outer join demo\_cds\_assoc\_spfli on
        demo\_cds\_assoc\_spfli.carrid = demo\_cds\_assoc\_scarr.carrid
      left outer join demo\_cds\_sflight as sflight on
            sflight.carrid = demo\_cds\_assoc\_spfli.carrid
        and sflight.connid = demo\_cds\_assoc\_spfli.connid
      left outer join demo\_cds\_sairport as sairport on
        sairport.id = demo\_cds\_assoc\_spfli.airpfrom
    {
      demo\_cds\_assoc\_scarr.carrname as carrname,
      demo\_cds\_assoc\_spfli.connid   as connid,
      sflight.fldate                as fldate,
      sairport.name                 as name
    }
    where
      demo\_cds\_assoc\_scarr.carrid = :p\_carrid

In this view, the same result is again achieved using joins.