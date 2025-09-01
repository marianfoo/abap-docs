  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Path Expressions](javascript:call_link\('abenopen_sql_path.htm'\)) → 

Path Expressions, Use in the SELECT List.

This example demonstrates [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) in Open SQL.

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
           \\\_spfli-connid AS connid,
           \\\_spfli\\\_sflight-fldate AS fldate,
           \\\_spfli\\\_sairport-name AS name
           FROM demo\_cds\_assoc\_scarr AS scarr
           WHERE scarr~carrid = @carrid
           ORDER BY carrname, connid, fldate
           INTO TABLE @DATA(result1).
    "Joins in Open SQL
    SELECT scarr~carrname AS carrname,
           spfli~connid   AS connid,
           sflight~fldate AS fldate,
           sairport~name  AS name
           FROM scarr  LEFT OUTER JOIN spfli
                         ON spfli~carrid = scarr~carrid
                       LEFT OUTER JOIN sflight
                         ON sflight~carrid = spfli~carrid AND
                            sflight~connid = spfli~connid
                       LEFT OUTER JOIN sairport
                         ON sairport~id = spfli~airpfrom
           WHERE scarr~carrid = @carrid
           ORDER BY carrname, connid, fldate
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
  association to demo\_cds\_assoc\_spfli as \_spfli on
    scarr.carrid = \_spfli.carrid
  {
    \_spfli,
    carrid,
    carrname
  }

This view publishes its [association](javascript:call_link\('abencds_f1_association.htm'\)) \_spfli in its SELECT list. The association \_spfli uses the view demo\_cds\_assoc\_spfli as a target data source:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASC\_SPF'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_spfli
  as select from
    spfli
    association        to sflight  as \_sflight  on
          spfli.carrid = \_sflight.carrid
      and spfli.connid = \_sflight.connid
    association \[1..1\] to sairport as \_sairport on
      spfli.airpfrom = \_sairport.id
    {
      \_sflight,
      \_sairport,
      carrid,
      connid,
      airpfrom
    }

This view publishes its [associations](javascript:call_link\('abencds_f1_association.htm'\)) \_sflight and \_sairport in its SELECT list, making it possible to specify them in path expressions after \_spfli. These associations use database tables as data sources and always close a path expression.

The SELECT statement contains three path expressions in its SELECT list alongside a column specified as an elementary column. The first association contains only the association \_spfli of the CDS view specified after demo\_cds\_assoc\_scarr FROM. The associations of the data source of the root element are added to the other two path expressions.

The SELECT statement demonstrates which joins need to be created in Open SQL to achieve the same result. This is guaranteed by an assertion.

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

This view shows how the same paths specified in the SELECT statement of the view in [CDS DDL syntax](javascript:call_link\('abencds_f1_path_expression.htm'\)) and also achieves the same result.

Finally, a fourth SELECT statement accesses the CDS view demo\_cds\_outer\_joins:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_OUTJOIN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_outer\_joins
with parameters
p\_carrid :s\_carrid
as select from
scarr
left outer join spfli on
spfli.carrid = scarr.carrid
left outer join sflight on
sflight.carrid = spfli.carrid
and sflight.connid = spfli.connid
left outer join sairport on
sairport.id = spfli.airpfrom
{
scarr.carrname as carrname,
spfli.connid as connid,
sflight.fldate as fldate,
sairport.name as name
}
where
scarr.carrid = :p\_carrid    

In this view, the same result is again achieved using joins.