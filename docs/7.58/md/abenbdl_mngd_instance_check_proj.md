  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_projection_bo.htm) →  [RAP - Behavior Definition Header, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_bdef_projection_header.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20with%20managed%20instance%20filter%2C%20ABENBDL_MNGD_INSTANCE_CHECK_PROJ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

RAP - with managed instance filter

Syntax

...
with managed instance filter;
...

Effect

Optional addition for [projection BDEFs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") and [interface BDEFs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"). It is specified in the [behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and it is valid for all [RAP BO entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") that are part of the current RAP BO.

The effect is that the [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_cond_expr.htm) condition of the underlying [CDS transactional query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") or [CDS transactional interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") is evaluated when the BDEF is accessed with [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenodata_glosry.htm "Glossary Entry") requests from Web clients, both for [active](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_active_instance_glosry.htm "Glossary Entry") and for [draft instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry"). If an entity within the BDEF does not have a WHERE clause, this addition does not have any effect, but as soon as a WHERE clause is added, the checks are activated.

If this addition is not specified, the WHERE clause is ignored when the BDEF is accessed with [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenodata_glosry.htm "Glossary Entry") requests from Web clients. This means that it is possible to read and modify entity instances that are not part of the result set of the projection BDEF or interface BDEF in question.

The instances for the following operations are checked before every EML or OData call:

-   [Read operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_read_operation_glosry.htm "Glossary Entry")
-   [Update operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_update_operation_glosry.htm "Glossary Entry")
-   [Delete operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_delete_operation_glosry.htm "Glossary Entry")
-   Executing [instance RAP BO operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_instance_operation_glosry.htm "Glossary Entry")
-   [Read by association operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry")
-   EML permissions ([GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm))

If an entity instance does not fulfill the WHERE clause, it is returned in the [response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") [FAILED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm). It is not passed to the [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") of the operation in question.

The WHERE clause is evaluated and the instance check takes place before the RAP handler method is called but after the [RAP BO augmentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_augmentation_glosry.htm "Glossary Entry"), so the [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") can modify incoming requests with the operation augmentation in such a way that they fulfill the WHERE clause, for example, if fields are defined as readonly in the projection.

During an update request, if instances are modified in a way that they no longer fulfill the WHERE clause of the underlying CDS entity, then no further operations on these instances are possible via the current projection or interface BDEF.

For the operations [create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_create_operation_glosry.htm "Glossary Entry") and [create-by-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry"), the RAP BO provider must ensure via RAP handler methods and the operation augmentation that only valid entity instances are created. The managed RAP BO provider does not evaluate the WHERE clause for these operations. Therefore, creating RAP BO entity instances that do not fulfill the WHERE condition is possible, but no further operations on these instances are possible.

In the case of the read-by-association operation, the requested RAP BO entity instances of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") instances are checked after every EML or OData call. If an entity instance does not fulfill the WHERE clause of the child entity, it is removed from the [RESULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_result.htm) and [LINK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm) set, but it is not added to the response parameter FAILED.

If a projection BDEF is based on an interface BDEF and the underlying projection views both have a WHERE clause, then always the requested entity decides whether the instance filter is active or not. For example, if only the projection BDEF specifies with managed instance checks and a RAP BO consumer requests this projection BDEF, then both WHERE clauses (the one for the interface and the one for the projection) are evaluated and instances are filtered out.

Restrictions

The WHERE clause is not evaluated when executing [static RAP BO operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_static_operation_glosry.htm "Glossary Entry").

Hints

-   The addition with managed instance checks can considerably slow down read and modify requests. Therefore, it should be used only after careful consideration.
-   When using [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm), with managed instance checks does not have any effect.

Example

The following example demonstrates the effect of the addition with managed instance filter in a projection BDEF.

First of all, it demonstrates that the WHERE clause of a CDS transactional interface is ignored in an ABAP EML call if the addition with managed instance filter is not specified.

CDS transactional interface that uses a WHERE clause to filter the result set to include only instances with that have the value AA in the field carrid.

@EndUserText.label: 'CDS transactional query'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_INSTANCE\_FILTER\_TQ
  provider contract transactional\_query
  as projection on DEMO\_RAP\_INSTANCE\_FILTER
{
  key carrid,
  key connid,
      countryfr
}
where carrid = 'AA'

Projection BDEF without managed instance filter:

projection;
strict ( 2 );
define behavior for DEMO\_RAP\_INSTANCE\_FILTER\_TQ alias Root
{
  use create;
  use update;
  use delete;
}

Accessing the projection BDEF:

-   The projection BDEF is first accessed using ABAP SQL. The WHERE condition of the transactional interface is evaluated and the result set contains only instances that have the value AA in the field carrid.
-   Then, the projection BDEF is accessed using ABAP EML. The WHERE condition i not evaluated and the result set also contains an instance with the value LH in the field carrid.

"ABAP SQL read on projection
SELECT FROM DEMO\_RAP\_INSTANCE\_FILTER\_TQ
  FIELDS carrid, connid, countryfr
  INTO TABLE @FINAL(select\_res).
"ABAP EML read entity on projection
READ ENTITY DEMO\_RAP\_INSTANCE\_FILTER\_TQ
ALL FIELDS WITH VALUE #(
                       ( carrid = 'AA' connid = '0017' )
                       ( carrid = 'AA' connid = '0064' )
                       ( carrid = 'LH' connid = '0400' )
)
RESULT DATA(read\_res)
FAILED DATA(read\_failed).
  FINAL(o) = cl\_demo\_output=>new(  ).
  o->next\_section( 'SELECT with ABAP SQL'
    )->write( select\_res
    )->next\_section( 'READ with ABAP EML'
    )->write( read\_res
    )->display(  ).

Result: The entity instance highlighted in red should not be part of the result set. It should be filtered out by the WHERE clause.

![Figure](instance_filter.jpg)

If, however, the projection BDEF specified the addition with managed instance filter, the WHERE clause is evaluated.

Projection BDEF with managed instance filter:

projection;
strict ( 2 );
with managed instance filter;
define behavior for DEMO\_RAP\_INSTANCE\_FILTER\_TQ1
{
  use create;
  use update;
  use delete;
}

Accessing the projection BDEF with managed instance filter:

-   The projection BDEF with a managed instance filter is accessed first using ABAP SQL and then using ABAP EML. The WHERE clause is evaluated in both cases and the result set is identical.

"ABAP SQL read on projection
SELECT FROM demo\_rap\_instance\_filter\_tq1
  FIELDS carrid, connid, countryfr
  INTO TABLE @FINAL(select\_res1).
"ABAP EML read entity on projection
READ ENTITY demo\_rap\_instance\_filter\_tq1
FIELDS ( carrid connid countryfr )
WITH VALUE #( ( %key-carrid = 'AA ' %key-connid = '0017' )
              ( %key-carrid = 'AA'  %key-connid = '0064' )
              ( %key-carrid = 'LH'  %key-connid = '0400' ) )
RESULT DATA(read\_res1)
FAILED DATA(read\_failed1).
FINAL(o) = cl\_demo\_output=>new(  ).
o->next\_section( 'SELECT with ABAP SQL'
  )->write( select\_res1
  )->next\_section( 'READ with ABAP EML'
  )->write( read\_res1
  )->display(  ).

-   Result:
    ![Figure](instance_filter2.jpg)