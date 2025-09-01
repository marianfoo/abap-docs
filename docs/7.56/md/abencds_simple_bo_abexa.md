  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) → 

RAP - Simple Unmanaged RAP business object

This example demonstrates a simple unmanaged [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") and different ways of accessing it.

Note that this example rather shows technical aspects of an unmanaged business objects than correct semantical behavior. The business case - increase the price of selected flights - is achieved in a way that would not be followed in a real life scenario. Here, it is shown that the methods of an ABAP behavior pool can also be freely implemented and that this implementation can be called using EML as well as from outside an AS ABAP using an exposed service and the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of one single [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") without [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry"):

@AbapCatalog.sqlViewName: 'DEMOROOTSIMPLE'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view demo\_cds\_simple\_root\_entity
  as select from sflight
{
  key carrid,
  key connid,
  key fldate,
      price,
      currency
}

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

unmanaged implementation in class BP\_DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY unique;
define behavior for demo\_cds\_simple\_root\_entity alias demo\_simple\_bo
{
  create;
  action enhancePrice parameter demo\_cds\_param\_for\_simple\_bo;
}

One [CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") operation is specified with create and one additional operation is specified with action. The action expects a parameter that must be typed with a structured CDS entity, for which the following [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") is defined:

define abstract entity demo\_cds\_param\_for\_simple\_bo
{
  percentage : abap.int4;
}

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The global class has two private static attributes:

-   BUFFER, an internal table with the structured line type of the root entity DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY that holds the business data.
-   LOG, an internal table of line type i, that logs the lines that were changed by the behavior implementation.

There are two local classes:

-   LHC\_DEMO\_SIMPLE\_BO
    
    The [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of the behavior pool. The methods of this class implement the following operations:
    
    -   A method MODIFY implements the create operation and the additional operation including an error handling.
    -   A method READ implements the read operation.
-   LSC\_DEMO\_SIMPLE\_BO
    
    The [saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") of the behavior pool. The methods of this class implement the actual update of the persistent data from the processed business data.
    

Business service

The [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") DEMO\_SD\_SIMPLE\_ROOT\_ENTITY exposes the root entity DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY. a [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry") DEMO\_SB\_SIMPLE\_ROOT\_ENTITY binds this service to the OData protocol.

Source Code

REPORT demo\_eml\_simple\_unmanaged\_bo.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(carrid)     = CONV sflight-carrid( 'LH' ).
    DATA(connid)     = CONV sflight-connid( '0400' ).
    DATA(percentage) = 10.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = carrid
      )->add\_field( CHANGING field = connid
      )->add\_field( CHANGING field = percentage
      )->request( ).
    DATA(out) = cl\_demo\_output=>new( ).
    "Using derived type
    TYPES create\_type TYPE TABLE FOR
          CREATE demo\_cds\_simple\_root\_entity.
    DATA create\_tab TYPE create\_type.
    create\_tab = VALUE #( ( carrid  = carrid ) ).
    MODIFY
      ENTITY demo\_cds\_simple\_root\_entity
      CREATE FROM create\_tab
      FAILED DATA(failed).
    IF failed-demo\_simple\_bo IS NOT INITIAL.
      out->display( 'Carrier not found' ).
      RETURN.
    ENDIF.
    "Using derived type
    TYPES read\_type TYPE TABLE FOR
          READ IMPORT demo\_cds\_simple\_root\_entity.
    DATA read\_tab TYPE read\_type.
    TYPES result\_type TYPE TABLE FOR
          READ RESULT demo\_cds\_simple\_root\_entity.
    DATA created\_data TYPE result\_type.
    read\_tab = VALUE #( ( carrid  = carrid connid = connid ) ).
    READ
      ENTITY demo\_cds\_simple\_root\_entity
      FROM read\_tab
      RESULT created\_data.
    out->next\_section( 'After CREATE'
      )->write( created\_data ).
    "Using type inference
    MODIFY
      ENTITY demo\_cds\_simple\_root\_entity
      EXECUTE enhanceprice FROM VALUE #( (
        carrid  = carrid
        connid = connid
        %param = VALUE #( percentage = percentage ) ) )
      FAILED failed.
    IF failed-demo\_simple\_bo IS NOT INITIAL.
      CASE failed-demo\_simple\_bo\[ 1 \]-%fail-cause.
        WHEN if\_abap\_behv=>cause-not\_found.
          out->display( 'Connection not found' ).
        WHEN if\_abap\_behv=>cause-unspecific.
          out->display( 'Percentage not accepted' ).
      ENDCASE.
      RETURN.
    ENDIF.
    "Using type inference
    READ
      ENTITY demo\_cds\_simple\_root\_entity
      FROM VALUE #( ( carrid  = carrid connid = connid ) )
      RESULT DATA(modified\_data).
    out->next\_section( 'After EXECUTE'
      )->write( modified\_data ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->display( 'Error in commit!' ).
      RETURN.
    ENDIF.
    SELECT FROM demo\_cds\_simple\_root\_entity
           FIELDS \*
           WHERE carrid = @carrid  AND
                 connid = @connid
           ORDER BY carrid, connid, fldate
           INTO TABLE @DATA(check).
    ASSERT modified\_data = check.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program:

-   A create operation is executed with the statement MODIFY ENTITY.
    
    By using the addition CREATE FROM, the method MODIFY of the handler class LHC\_DEMO\_SIMPLE\_BO is called and an internal table is passed to the parameter create\_tab. The data type of the internal table is derived with the special addition TYPE TABLE FOR CREATE of the TYPES statement. The method creates data in the static attribute BUFFER of the ABAP behavior pool by selecting from the root entity.
    
-   A read operation is executed with the statement READ ENTITY.
    
    This calls the method READ of the handler class LHC\_DEMO\_SIMPLE\_BO. Appropriate internal tables for passing the query parameters and receiving the result are again created by using special additions to the TYPES statement. The method reads those data from the static attribute BUFFER of the ABAP behavior pool that are specified by the query parameters.
    
-   An update operation is executed with the statement MODIFY ENTITY.
    
    By using the addition EXECUTE, the method MODIFY of the handler class LHC\_DEMO\_SIMPLE\_BO is called and an internal table is passed to the parameter action\_tab. The internal table is constructed using the value parameter VALUE and type inference. The method modifies lines of the static attribute BUFFER of the ABAP behavior pool as specified in action\_tab. Additionally, the modified lines are logged in the static attribute LOG.
    
-   A read operation is executed with the statement READ ENTITY.
    
    Same as the above read operation, but the internal tables are created by the value parameter VALUE and type inference and by an inline declaration. If no error occurred, the result shows the modified data in the static attribute BUFFER of the ABAP behavior pool.
    
-   The changes are saved with the statement COMMIT ENTITIES.
    
    This calls the methods FINALIZE, CHECK\_BEFORE\_SAVE and SAVE of the saver class LSC\_DEMO\_SIMPLE\_BO.
    
    -   In FINALIZE, the static attribute BUFFER of the ABAP behavior pool is reduced to the modified lines.
    -   In CHECK\_BEFORE\_SAVE, a condition is checked.
    -   In SAVE, the actual ABAP SQL UPDATE takes place on the respective DDIC database table.

Access with OData using SAP Gateway OSCI

The program DEMO\_ODATA\_SIMPLE\_BO\_GATEWAY shows, how the ICF node /sap/opu/odata/sap/demo\_sb\_simple\_root\_entity/ of the above mentioned service binding DEMO\_SB\_SIMPLE\_ROOT\_ENTITY can be accessed by an utility method of the OData Services Consumption and Integration (OSCI) component of [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry").

An appropriate HTTP request header and body is constructed and passed to method GET\_INSTANCE of class /IWFND/CL\_SUTIL\_CLIENT\_PROXY. This method passes the HTTP request as an HTTP post request to the OData service. By setting external breakpoints in the CCIMP include of the behavior pool, you can track how the behavior implementation is called by the [RAP runtime framework](javascript:call_link\('abenrap_runt_framework_glosry.htm'\) "Glossary Entry") that handles the HTTP request on the AS ABAP.

The respective DDIC database table is accessed by ABAP SQL before and after accessing the OData service in order to show the effect.

In real live applications, an HTTP request as shown here would be send by web based frameworks as [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry").

Access with OData using ICF directly

The program DEMO\_ODATA\_SIMPLE\_BO\_ICF drills down the access to the OData service to using classes and methods of [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry").

The same HTTP request body is constructed as in the example above. But here, the class CL\_HTTP\_CLIENT is directly used to create a client object for the OData service, which is used to pass appropriate values for the HTTP request header and the HTTP request body as a post request to the OData service.

The result is the same as by using the utility method of SAP Gateway. This example serves the purpose to show a glimpse of the underlying well-known techniques of frameworks like SAP Gateway that again is part of the RAP runtime framework.