# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP for RAP Business Objects / RAP-Related System Classes

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abaprap_system_classes.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_system_classes.htm)
- [abenrap_cl_abap_behv_aux_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cl_abap_behv_aux_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.236Z

---

### abaprap_system_classes.htm

> **📖 Official SAP Documentation**: [abaprap_system_classes.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_system_classes.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP-Related System Classes, ABAPRAP_SYSTEM_CLASSES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

RAP-Related System Classes

The class CL\_ABAP\_BEHV\_AUX contains methods for retrieving information about the context of the current [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") or [saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") and the kind of method.

For example, regarding the context information: When a behavior is accessed via a [CDS interface behavior definition](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"), this access is directly mapped to a request on the base [RAP business object (BO)](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A use case might be that the base BO implementation would like to have the information available that it was invoked via a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). For example, a RAP BO interface implements specific logic (for example, some fields are dynamically set to read-only) in the base BO's behavior pool. The implementation in the base BO requires then the name of the RAP BO interface which can be retrieved using the methods of this class.

Similarly, the base BO implementation might be interested in the knowing whether it was invoked by a [RAP projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry").

Example

The following code snippet shows how information on the current context might be retrieved using the get\_current\_context method by storing the information in a variable [declared inline](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry").

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING
      from\_projection = FINAL(fr\_proj)
      from\_interface  = FINAL(fr\_int)
      in\_local\_mode   = FINAL(loc\_mode)
      draft\_activate  = FINAL(dr\_act)
      for\_permissions = FINAL(for\_perm)
      privileged      = FINAL(priv) ).

Executable Examples

-   The example [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](javascript:call_link\('abenrap_cl_abap_behv_aux_abexa.htm'\)) demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.
-   The example [Using the Addition PRIVILEGED with an ABAP EML Statement](javascript:call_link\('abeneml_privileged_abexa.htm'\)) demonstrates the addition PRIVILEGED using an [action](javascript:call_link\('abenaction_glosry.htm'\) "Glossary Entry") and a managed RAP BO. In this example, the method get\_current\_context is used to retrieve the information whether the running handler is running in privileged mode.

Continue
![Example](exa.gif "Example") [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](javascript:call_link\('abenrap_cl_abap_behv_aux_abexa.htm'\))



**📖 Source**: [abaprap_system_classes.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_system_classes.htm)

### abenrap_cl_abap_behv_aux_abexa.htm

> **📖 Official SAP Documentation**: [abenrap_cl_abap_behv_aux_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cl_abap_behv_aux_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrap_cl_abap_behv_aux_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cl_abap_behv_aux_abexa.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [RAP-Related System Classes](javascript:call_link\('abaprap_system_classes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Getting RAP Context Information Using CL_ABAP_BEHV_AUX, ABENRAP_CL_ABAP_BEHV_AUX_ABEX
A, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX

This example demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.

Note: This example does not fully meet the requirements of the [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). It is intentionally kept short and simple and focuses on specific RAP aspects. For example, some [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") implementations might be empty. See more information on the RAP BO contract in the Development guide for the ABAP RESTful Application Programming Model.

Used artifacts in the example

What

CDS view

BDEF

Behavior Pool (ABP)

Notes

Base [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry")

DEMO\_EXT\_M

DEMO\_EXT\_M

CCIMP include

The CDS data model only consists of one node constituting the root entity.
The BDEF defines a managed RAP BO. It is also defined as extensible.
Since it is a simple example serving demonstration purposes, the RAP handler methods in the ABP do not contain any meaningful implementations. Each method implementation contains calls for the methods get\_current\_context and get\_current\_handler\_kind. The return values of the method parameters are stored in a [nested structure](javascript:call_link\('abennested_structure_glosry.htm'\) "Glossary Entry") in the global class of the ABP and added to an internal table for displaying purposes.

[RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry")

DEMO\_INTF\_M

DEMO\_INTF\_M

 

The interface BDEF projects the original RAP BO.

RAP BO interface extension

 

DEMO\_INTF\_EXT\_M

The BDEF extension extends the RAP BO via its interface. It addresses the root node by its interface name. It adds one extension action to the RAP BO which is implemented in the extension ABP. This action simply updates the value of a specific field with a default value. Additionally, the methods in the extension ABP contains similar code snippets for method calls as mentioned above.CCIMP include

[RAP projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry")

DEMO\_PROJ\_M

DEMO\_PROJ\_M

 

The CDS projection view is based on the CDS view of the base BO's CDS view (the projected entity) and exposes only a subset of elements.

Source Code   

REPORT demo\_rap\_cl\_abap\_behv\_aux.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      o TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    o->begin\_section( \`Demo: cl\_abap\_behv\_aux\`
    )->write\_doc( \`<b>1) Create operation directly \` &&
                  \`on the root entity</b>\` ).
    MODIFY ENTITIES OF demo\_ext\_m
      ENTITY Root
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #( ( %cid = 'cid1'
                      key\_field = 1
                      field1 = 'aaa'
                      field2 = 'bbb'
                      field3 = 10
                      field4 = 11 )
                    ( %cid = 'cid2'
                      key\_field = 2
                      field1 = 'ccc'
                      field2 = 'ddd'
                      field3 = 20
                      field4 = 21 ) )
      MAPPED FINAL(m1)
      FAILED FINAL(f1)
      REPORTED FINAL(r1).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_root).
    o->write( create\_root
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    o->write\_doc( \`<b>2) Create operation on the root \` &&
                  \`entity via interface</b>\` ).
    "Creating instances of the root entity via the interface
    MODIFY ENTITIES OF demo\_intf\_m
      ENTITY root\_interface
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #( ( %cid = 'cid3'
                      key\_field = 3
                      field1 = 'eee'
                      field2 = 'fff'
                      field3 = 30
                      field4 = 31 )
                    ( %cid = 'cid4'
                      key\_field = 4
                      field1 = 'ggg'
                      field2 = 'hhh'
                      field3 = 40
                      field4 = 41 ) )
       MAPPED FINAL(map2)
       FAILED FINAL(f2)
       REPORTED FINAL(r2).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_via\_itf).
    o->write( create\_via\_itf
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    o->write\_doc( \`<b>3) Action execution via RAP BO \` &&
                  \`interface extension</b>\` ).
    "Executing an action via RAP BO interface extension
    MODIFY ENTITIES OF demo\_intf\_m
       ENTITY root\_interface
       EXECUTE set\_value\_ext
       FROM VALUE #( ( key\_field = 1 )
                     ( key\_field = 2 )
                     ( key\_field = 3 )
                     ( key\_field = 4 ) )
       MAPPED FINAL(m3)
       FAILED FINAL(f3)
       REPORTED FINAL(r3).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(action\_via\_bo\_intf).
    o->write( action\_via\_bo\_intf
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    o->write\_doc( \`<b>4) Create operation on the root \` &&
                  \`entity via a projection</b>\` ).
    "Creating instances of the root entity via a projection
    "Note that the projection view has only a subset of fields.
    MODIFY ENTITIES OF demo\_proj\_m
       ENTITY proj
       CREATE FIELDS ( key\_field field1 field2 )
       WITH VALUE #( ( %cid = 'cid5'
                       key\_field = 5
                       field1 = 'iii'
                       field2 = 'jjj' )
                     ( %cid = 'cid6'
                       key\_field = 6
                       field1 = 'kkk'
                       field2 = 'lll' ) )
        MAPPED FINAL(m4)
        FAILED FINAL(f4)
        REPORTED FINAL(r4).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
      FROM demo\_tab\_root\_5
      ORDER BY key\_field INTO TABLE @FINAL(create\_via\_proj).
    o->write( create\_via\_proj
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    o = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object, the RAP BO interface and RAP projection BO from an ABAP program and performs the following steps:

1.  Create operation directly on the root entity
    
    Instances are created directly on the root entity. The instances are saved to the database table whose entries are displayed. Additionally, the outcome of setting the parameters when calling the methods of class CL\_ABAP\_BEHV\_AUX is displayed. This is also true for the following steps.
    
2.  Create operation on the root entity via interface
    
    More instances are created on the root entity, however, with an ABAP EML MODIFY request via the RAP BO interface. Hence, the from\_interface parameter is filled after calling the get\_current\_context method.
    
3.  Action execution via RAP BO interface extension
    
    An action which is implemented in an extension ABP is called via a RAP BO interface extension. This method simply updates the value of a specific field. The output of the method calls demonstrates that also methods of the base BO's ABP are called. The context for in\_local\_mode is true in this case.
    
4.  Create operation on the root entity via a projection
    
    More instances are created on the root entity, however, with an ABAP EML MODIFY request via the RAP BO projection. Hence, the from\_projection parameter is filled after calling the get\_current\_context method.
