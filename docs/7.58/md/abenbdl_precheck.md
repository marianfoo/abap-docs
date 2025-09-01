  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20precheck%2C%20ABENBDL_PRECHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - precheck

Syntax

... precheck ...

Effect

A method that is called before a modify request is executed on the transactional buffer to prevent unwanted changes from reaching the application buffer.

A precheck can be defined for the following [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"):

-   [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\))
-   [operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [actions](javascript:call_link\('abenbdl_nonstandard.htm'\))

An implementation in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR PRECHECK](javascript:call_link\('abaphandler_meth_precheck.htm'\)) in the local [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

Availability

-   [Managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BOs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry")

Projection Implementation

If a precheck is defined in a projection implementation, an ABAP behavior pool is required.

If the base BO defines a precheck, this is automatically reused. The projection can also define a new precheck. Also, it is possible to define a precheck for both layers. In this case, first, the precheck of the projection layer is called and afterwards the precheck of the base layer.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Operation Precheck](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f6e3880b641649b1b8247486579a1c9b?version=sap_cross_product_abap).

Hint

Cannot be used for internal operations using the keyword [internal](javascript:call_link\('abenbdl_internal.htm'\)).

Example

The following example shows an unmanaged BDEF based on the CDS view entity DEMO\_RAP\_UNMANAGED\_PRECHECK. It defines the RAP BO operation addition precheck for the standard operation create.

unmanaged
implementation in class bp\_demo\_rap\_unmanaged\_precheck unique;
strict(2);
define behavior for DEMO\_RAP\_UNMANAGED\_PRECHECK
lock master
authorization master ( instance )
{
  create(precheck);
  update;
  delete;
  field ( readonly:update ) KeyFieldRoot;
}

In the ABAP behavior pool BP\_DEMO\_RAP\_UNMANAGED\_PRECHECK, the precheck method implements a uniqueness check. It checks that the primary keys for new entity instances are unique. If the primary key values already exist, an entry is written into the failed and reported structures and the respective entity instance does not reach the application buffer.

Code snippet:

METHOD precheck\_create.
"prep buffer
LOOP AT entities ASSIGNING FIELD-SYMBOL(<buffer>).
      IF line\_exists( lcl\_buffer=>root\_buffer\[ key\_field
                      = <buffer>-KeyFieldRoot \] ).
      ELSE.
        SELECT SINGLE @abap\_true
         FROM demo\_dbtab\_root
         WHERE key\_field = @<buffer>-KeyFieldRoot
         INTO @DATA(exists).
        IF sy-subrc = 0.
          SELECT \*
          FROM demo\_dbtab\_root
          WHERE key\_field = @<buffer>-KeyFieldRoot
          APPENDING CORRESPONDING FIELDS
          OF TABLE @lcl\_buffer=>root\_buffer.
        ENDIF.
      ENDIF.
    ENDLOOP.
    "Uniqueness Check
    LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>).
      "Conditions for adding instances to the transactional buffer:
      " - %control of key field must not be flagged with 00
      " - key field must not be initial
      " - line with the key must not exist (but if the line exists
      "   and it is marked as deleted, it can be added)
      "It is assumed that %cid is always unique.
      IF <entity>-KeyFieldRoot IS INITIAL
      OR <entity>-%control-KeyFieldRoot = if\_abap\_behv=>mk-off
      OR line\_exists( lcl\_buffer=>root\_buffer\[ key\_field
      = <entity>-KeyFieldRoot \] )
      AND lcl\_buffer=>root\_buffer\[ key\_field
      = <entity>-KeyFieldRoot \]-deleted IS INITIAL.
        "Fill FAILED/REPORTED response structures.
        APPEND VALUE #( keyfieldroot = <entity>-KeyFieldRoot
                        %cid         = <entity>-%cid
                        %delete      = if\_abap\_behv=>mk-off
                        %update      = if\_abap\_behv=>mk-off
                        %create      = if\_abap\_behv=>mk-on
                        %fail-cause  = if\_abap\_behv=>cause-unspecific
                      )
                  TO failed-demo\_rap\_unmanaged\_precheck.
        APPEND VALUE #( %msg      = new\_message\_with\_text(
                     severity  = if\_abap\_behv\_message=>severity-error
                     text      = 'Create operation failed.' )
                     keyfieldroot = <entity>-KeyFieldRoot
                     %cid      = <entity>-%cid )
                     TO reported-demo\_rap\_unmanaged\_precheck.
   ENDIF.
   ENDLOOP.
ENDMETHOD.

For the complete implementation in the ABAP behavior pool, see CCIMP include.

The class CL\_DEMO\_RAP\_UNMANAGED\_PRECHECK accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the following steps:

-   It inserts data into the database using ABAP SQL [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)).
-   It creates two valid new entity instances with unique keys. They pass the precheck and are written to the database.
-   It creates two more new entity instances - one is valid, one has a duplicate key value (value '1' already exists).
-   The entity instance with duplicate key is written into the failed and reported structures. The valid entity instance is committed to the database.