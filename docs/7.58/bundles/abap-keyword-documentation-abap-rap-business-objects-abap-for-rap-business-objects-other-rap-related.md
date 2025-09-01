# ABAP - Keyword Documentation / ABAP - RAP Business Objects / ABAP for RAP Business Objects / Other RAP-Related ABAP Language Elements and Topics / RAP-Related System Classes and Functionality

Included pages: 8


### abaprap_system_classes.htm

---
title: "RAP-Related System Classes and Functionality"
description: |
  The following topics are covered in this section: -   CL_ABAP_BEHV_AUX(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm) -   CL_ABAP_BEHVDESCR(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcl_abap_behvdescr.htm) CL_ABAP_BEHV_AUX(h
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm"
abapFile: "abaprap_system_classes.htm"
keywords: ["do", "if", "class", "abaprap", "system", "classes"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP-Related%20System%20Classes%20and%20Functionality%2C%20ABAPRAP_SYSTEM_CLASSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

RAP-Related System Classes and Functionality

The following topics are covered in this section:

-   [CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm)
-   [CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcl_abap_behvdescr.htm)

Continue
[CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm)
[CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcl_abap_behvdescr.htm)


### abaprap_cl_abap_behv_aux.htm

---
title: "Method"
description: |
  Details GET_CURRENT_PHASE Information about the current RAP transactional phase(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_phase_glosry.htm 'Glossary Entry'), for example, RAP early save phase(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearl
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm"
abapFile: "abaprap_cl_abap_behv_aux.htm"
keywords: ["do", "if", "case", "try", "method", "class", "abaprap", "abap", "behv", "aux"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHV_AUX%2C%20ABAPRAP_CL_ABAP_BEHV_AUX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHV\_AUX

The class CL\_ABAP\_BEHV\_AUX contains methods for retrieving various pieces of information.

Method

Details

GET\_CURRENT\_PHASE

Information about the current [RAP transactional phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_phase_glosry.htm "Glossary Entry"), for example, [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry"), [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry"), or [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry").

GET\_CURRENT\_CONTEXT

Information about the context of the current [RAP handler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") and [saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry")

GET\_CURRENT\_HANDLER\_KIND

Information about the kind of method. For information on the values, see the domain ABP\_BEHV\_KIND.

Hint

Regarding GET\_CURRENT\_CONTEXT:

-   In the [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry") and [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry") it makes no sense to evaluate the components other than from\_projection.
-   The for\_permissions parameter can be used to avoid a double checking of authorization or feature control if an ABAP EML modify request is handled.
-   Example use cases for the context information:
    -   When a behavior is accessed via a [RAP interface behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), this access is directly mapped to a request on the base [RAP business object (BO)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A use case might be that the base BO implementation would like to have the information available that it has been called via a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). For example, a RAP BO interface implements specific logic (for example, some fields are dynamically set to read-only) in the base BO's behavior pool. The implementation in the base BO then requires the name of the RAP BO interface which can be retrieved using the methods of this class.
    -   Similarly, the base BO implementation might be interested in knowing whether it was invoked by a [RAP projection extension entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry").

Example

The following code snippet shows how information on the current context might be retrieved using the GET\_CURRENT\_CONTEXT method by storing the information in a variable [declared inline](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declaration_glosry.htm "Glossary Entry").

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING
      from\_projection = FINAL(fr\_proj)
      from\_interface  = FINAL(fr\_int)
      in\_local\_mode   = FINAL(loc\_mode)
      draft\_activate  = FINAL(dr\_act)
      for\_permissions = FINAL(for\_perm)
      privileged      = FINAL(priv) ).

Executable Examples

-   The example [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_abexa.htm) demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.
-   The example [Using the Addition PRIVILEGED with an ABAP EML Statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_privileged_abexa.htm) demonstrates the addition PRIVILEGED using an [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaction_glosry.htm "Glossary Entry") and a managed RAP BO. In this example, the method get\_current\_context is used to retrieve the information whether the running handler is running in privileged mode.
-   The example [Checking RAP Transactional Phases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_ph_abexa.htm) demonstrates the methods GET\_CURRENT\_PHASE and GET\_CURRENT\_HANDLER\_KIND.

Continue
![Example](exa.gif "Example") [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_abexa.htm)
![Example](exa.gif "Example") [Checking RAP Transactional Phases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_ph_abexa.htm)


### abenrap_cl_abap_behv_aux_abexa.htm

---
title: "Used artifacts in the example"
description: |
  What CDS view BDEF Behavior Pool (ABP) Notes Base RAP business object(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm 'Glossary Entry') DEMO_EXT_M DEMO_EXT_M CCIMP include The CDS data model only consists of one node constituting the root entity. The BDEF defin
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_abexa.htm"
abapFile: "abenrap_cl_abap_behv_aux_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abenrap", "abap", "behv", "aux", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) →  [CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Getting%20RAP%20Context%20Information%20Using%20CL_ABAP_BEHV_AUX%2C%20ABENRAP_CL_ABAP_BEHV_AUX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX

This example demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and focuses on specific RAP aspects. For example, some [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") implementations might be empty. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Used artifacts in the example

What

CDS view

BDEF

Behavior Pool (ABP)

Notes

Base [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry")

DEMO\_EXT\_M

DEMO\_EXT\_M

CCIMP include

The CDS data model only consists of one node constituting the root entity.
The BDEF defines a managed RAP BO. It is also defined as extensible.
Since it is a simple example serving demonstration purposes, the RAP handler methods in the ABP do not contain any meaningful implementations. Each method implementation contains calls for the methods get\_current\_context and get\_current\_handler\_kind. The return values of the method parameters are stored in a [nested structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennested_structure_glosry.htm "Glossary Entry") in the global class of the ABP and added to an internal table for displaying purposes.

[RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry")

DEMO\_INTF\_M

DEMO\_INTF\_M

 

The interface BDEF projects the original RAP BO.

RAP BO interface extension

 

DEMO\_INTF\_EXT\_M

The BDEF extension extends the RAP BO via its interface. It addresses the root node by its interface name. It adds one extension action to the RAP BO which is implemented in the extension ABP. This action simply updates the value of a specific field with a default value. Additionally, the methods in the extension ABP contains similar code snippets for method calls as mentioned above. CCIMP include

[RAP projection business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")

DEMO\_PROJ\_M

DEMO\_PROJ\_M

 

The CDS projection view is based on the CDS view of the base BO's CDS view (the projected entity) and exposes only a subset of elements.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_cl\_abap\_behv\_aux DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_cl\_abap\_behv\_aux IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: cl\_abap\_behv\_aux\`
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_root).
    out->write( create\_root
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    out->write\_doc( \`<b>2) Create operation on the root \` &&
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_via\_itf).
    out->write( create\_via\_itf
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    out->write\_doc( \`<b>3) Action execution via RAP BO \` &&
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(action\_via\_bo\_intf).
    out->write( action\_via\_bo\_intf
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    out->write\_doc( \`<b>4) Create operation on the root \` &&
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM demo\_tab\_root\_5
      ORDER BY key\_field INTO TABLE @FINAL(create\_via\_proj).
    out->write( create\_via\_proj
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object, the RAP BO interface and RAP projection BO from an ABAP class and performs the following steps:

1.  Create operation directly on the root entity
    
    Instances are created directly on the root entity. The instances are saved to the database table whose entries are displayed. Additionally, the outcome of setting the parameters when calling the methods of class CL\_ABAP\_BEHV\_AUX is displayed. This is also true for the following steps.
    
2.  Create operation on the root entity via interface
    
    More instances are created on the root entity, however, with an ABAP EML MODIFY request via the RAP BO interface. Hence, the from\_interface parameter is filled after calling the get\_current\_context method.
    
3.  Action execution via RAP BO interface extension
    
    An action which is implemented in an extension ABP is called via a RAP BO interface extension. This method simply updates the value of a specific field. The output of the method calls demonstrates that also methods of the base BO's ABP are called. The context for in\_local\_mode is true in this case.
    
4.  Create operation on the root entity via a projection
    
    More instances are created on the root entity, however, with an ABAP EML MODIFY request via the RAP BO projection. Hence, the from\_projection parameter is filled after calling the get\_current\_context method.


### abenrap_cl_abap_behv_aux_ph_abexa.htm

---
title: "Checking RAP Transactional Phases"
description: |
  This example demonstrates the use of the methods GET_CURRENT_PHASE and GET_CURRENT_HANDLER_KIND of the class CL_ABAP_BEHV_AUX. Data model The CDS data model consists of the root entity DEMO_UMANAGED_ROOT_LATE_NUM2. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define roo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_ph_abexa.htm"
abapFile: "abenrap_cl_abap_behv_aux_ph_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abenrap", "abap", "behv", "aux", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) →  [CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checking%20RAP%20Transactional%20Phases%2C%20ABENRAP_CL_ABAP_BEHV_AUX_PH_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Checking RAP Transactional Phases

This example demonstrates the use of the methods GET\_CURRENT\_PHASE and GET\_CURRENT\_HANDLER\_KIND of the class CL\_ABAP\_BEHV\_AUX.

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM2.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_umanaged\_root\_late\_num2
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of demo\_umanaged\_child\_late\_num2 as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM2 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class
bp\_demo\_umanaged\_root\_late\_nu2 unique;
strict(2);
define behavior for demo\_umanaged\_root\_late\_num2
lock master
authorization master ( global )
late numbering
{
  create;
  update;
  delete;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU2. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_transaction\_phases DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed\_early TYPE RESPONSE FOR
        FAILED EARLY demo\_umanaged\_root\_late\_num2,
      failed\_late  TYPE RESPONSE FOR
        FAILED LATE demo\_umanaged\_root\_late\_num2.
    METHODS:
      initialize\_dbtabs,
      display\_dbtab\_entries,
      display\_phases.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_transaction\_phases IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: RAP Transactional Phases\` ).
    APPEND VALUE #( phase    = cl\_abap\_behv\_aux=>get\_current\_phase( )
                    meth\_log = \`No handler/saver method. Outside of\` &&
                    \` RAP transactional phases.\` )
      TO bp\_demo\_umanaged\_root\_late\_nu2=>phases.
    display\_phases( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`RAP create operation including a RAP BO \` &&
    \`instance that fails in the finalize method\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid1'
          field1 = 'create\_1'
          field2 = 'create\_2'
          field3 = 55
          field4 = 55 ) )
     FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`Successful RAP create operation\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid2'
          field1 = 'create\_3'
          field2 = 'create\_4'
          field3 = 50
          field4 = 55 ) )
     FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`RAP create operation including a RAP BO \` &&
    \`instance that fails in the check\_before\_save method\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid3'
          field1 = 'create\_5'
          field2 = 'create\_6'
          field3 = 100
          field4 = 200 ) )
      FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`Successful RAP create operation\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid4'
          field1 = 'create\_7'
          field2 = 'create\_8'
          field3 = 100
          field4 = 20 ) )
      FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD display\_dbtab\_entries.
    SELECT key\_field, field1, field2, field3, field4
       FROM demo\_tab\_root\_3 ORDER BY key\_field
       INTO TABLE @DATA(db\_tab).
    out->write( \`Database table entries after RAP operation:\`
    )->write( db\_tab ).
  ENDMETHOD.
  METHOD display\_phases.
    out->write( \`Transactional phases log table:\`
    )->write( bp\_demo\_umanaged\_root\_late\_nu2=>phases ).
    CLEAR bp\_demo\_umanaged\_root\_late\_nu2=>phases.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The example contains four RAP create operations using an ABAP EML MODIFY statement:

-   Two RAP create operations fail. One operation intentionally fails in the [finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_finalize.htm) [RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). Another operations fails in the [check\_before\_save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_check_before_save.htm) method.
-   Two RAP create operations are successful.
-   The example is implemented in a way that in the RAP handler and saver methods a log table is filled. The log table includes, among other things, information about the current RAP transactional phase (retrieved using CL\_ABAP\_BEHV\_AUX=>GET\_CURRENT\_PHASE) and the current handler kind (retrieved using CL\_ABAP\_BEHV\_AUX=>GET\_CURRENT\_HANDLER\_KIND).
-   The log table and the database table entries as result of the RAP create operations are displayed.
-   The log table for the failed instances shows that the [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry") is not reached, only the [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and the [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry"). The RAP transaction is concluded with the [RAP cleanup phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cleanup_phase_glosry.htm "Glossary Entry") demonstrated by the successful RAP create operations.


### abaprap_cl_abap_behv_aux.htm

---
title: "Method"
description: |
  Details GET_CURRENT_PHASE Information about the current RAP transactional phase(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_phase_glosry.htm 'Glossary Entry'), for example, RAP early save phase(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearl
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm"
abapFile: "abaprap_cl_abap_behv_aux.htm"
keywords: ["do", "if", "case", "try", "method", "class", "abaprap", "abap", "behv", "aux"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHV_AUX%2C%20ABAPRAP_CL_ABAP_BEHV_AUX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHV\_AUX

The class CL\_ABAP\_BEHV\_AUX contains methods for retrieving various pieces of information.

Method

Details

GET\_CURRENT\_PHASE

Information about the current [RAP transactional phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_phase_glosry.htm "Glossary Entry"), for example, [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry"), [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry"), or [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry").

GET\_CURRENT\_CONTEXT

Information about the context of the current [RAP handler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") and [saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry")

GET\_CURRENT\_HANDLER\_KIND

Information about the kind of method. For information on the values, see the domain ABP\_BEHV\_KIND.

Hint

Regarding GET\_CURRENT\_CONTEXT:

-   In the [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry") and [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry") it makes no sense to evaluate the components other than from\_projection.
-   The for\_permissions parameter can be used to avoid a double checking of authorization or feature control if an ABAP EML modify request is handled.
-   Example use cases for the context information:
    -   When a behavior is accessed via a [RAP interface behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), this access is directly mapped to a request on the base [RAP business object (BO)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A use case might be that the base BO implementation would like to have the information available that it has been called via a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). For example, a RAP BO interface implements specific logic (for example, some fields are dynamically set to read-only) in the base BO's behavior pool. The implementation in the base BO then requires the name of the RAP BO interface which can be retrieved using the methods of this class.
    -   Similarly, the base BO implementation might be interested in knowing whether it was invoked by a [RAP projection extension entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry").

Example

The following code snippet shows how information on the current context might be retrieved using the GET\_CURRENT\_CONTEXT method by storing the information in a variable [declared inline](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declaration_glosry.htm "Glossary Entry").

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING
      from\_projection = FINAL(fr\_proj)
      from\_interface  = FINAL(fr\_int)
      in\_local\_mode   = FINAL(loc\_mode)
      draft\_activate  = FINAL(dr\_act)
      for\_permissions = FINAL(for\_perm)
      privileged      = FINAL(priv) ).

Executable Examples

-   The example [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_abexa.htm) demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.
-   The example [Using the Addition PRIVILEGED with an ABAP EML Statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_privileged_abexa.htm) demonstrates the addition PRIVILEGED using an [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaction_glosry.htm "Glossary Entry") and a managed RAP BO. In this example, the method get\_current\_context is used to retrieve the information whether the running handler is running in privileged mode.
-   The example [Checking RAP Transactional Phases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_ph_abexa.htm) demonstrates the methods GET\_CURRENT\_PHASE and GET\_CURRENT\_HANDLER\_KIND.

Continue
![Example](exa.gif "Example") [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_abexa.htm)
![Example](exa.gif "Example") [Checking RAP Transactional Phases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_ph_abexa.htm)


### abapcl_abap_behvdescr.htm

---
title: "Further Information"
description: |
  For more information, see the class documentation and the Runtime Type Services (RTTS)(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) topic. Executable Example Getting Type Information Using CL_ABAP_BEHVDESCR(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcl_abap_behvdescr.htm"
abapFile: "abapcl_abap_behvdescr.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abapcl", "abap", "behvdescr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHVDESCR%2C%20ABAPCL_ABAP_BEHVDESCR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHVDESCR

The class CL\_ABAP\_BEHVDESCR contains methods for [Runtime Type Creation (RTTI)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") and [Runtime Type Creation (RTTC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") in the context of [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") in RAP. This means that BDEF derived type information can be retrieved at runtime. Derived types can also be defined at runtime.

The following list shows a selection of available methods:

-   GET\_ROOT, GET\_ROOTS\_OF\_ENTITIES: Getting the root entity or entities for a given entity
-   GET\_TYPE: Getting runtime type information for entities and operations
-   CREATE\_DATA: Creating data objects typed with BDEF derived types (CRUD or action)
-   GET\_ABS\_TYPENAME: Getting the [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") for entities and operations
-   SET\_CONTROL\_FLAG, GET\_CONTROL\_FLAG, GET\_CONTROL\_FIELDS: Filling or getting [%control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_control.htm) fields
-   GET\_FOREIGN\_ENTITIES: Getting [RAP foreign entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") and aliases
-   GET\_CONTRACTS: Getting [API classification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapapi_classification.htm)

Further Information

For more information, see the class documentation and the [Runtime Type Services (RTTS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) topic.

Executable Example

[Getting Type Information Using CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_info_abexa.htm)

Continue
![Example](exa.gif "Example") [Getting BDEF Derived Type Information Using CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_info_abexa.htm)


### abenrap_type_info_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_rap_behvdescr DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. METHODS initialize_dbtabs. ENDCLASS.  Public class implementation CLASS cl_demo_rap_beh
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_info_abexa.htm"
abapFile: "abenrap_type_info_abexa.htm"
keywords: ["delete", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenrap", "type", "info", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) →  [CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcl_abap_behvdescr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Getting%20BDEF%20Derived%20Type%20Information%20Using%20CL_ABAP_BEHVDESCR%2C%20ABENRAP_TYPE_INFO_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

Getting BDEF Derived Type Information Using CL\_ABAP\_BEHVDESCR

This example demonstrates various methods of the CL\_ABAP\_BEHVDESCR class.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_behvdescr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_behvdescr IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demonstrating Methods of Class \` &&
      \`cl\_abap\_behvdescr\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting information on root entities
    out->next\_section( \`get\_root / get\_roots\_of\_entities\` ).
    DATA(ent1) = CONV abp\_entity\_name( 'DEMO\_MANAGED\_CHILD' ).
    DATA(ent2) = CONV abp\_entity\_name( 'DEMO\_RAP\_EXTENSIBLE\_CHILD' ).
    cl\_abap\_behvdescr=>get\_roots\_of\_entities(
      EXPORTING
        entities     = VALUE abp\_entity\_name\_tab( ( ent1 )
                                                  ( ent2 ) )
      IMPORTING
        entity\_roots = DATA(roots) ).
    out->write( roots ).
    DATA(root) = cl\_abap\_behvdescr=>get\_root( p\_entity = ent1 ).
    out->write\_data( root ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting type information/absolute type name
    out->next\_section( \`get\_type / get\_abs\_typename\` ).
    "Creating a type description object
    DATA(tdo) = cl\_abap\_behvdescr=>get\_type(
      p\_name = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind = if\_abap\_behv=>typekind-result
      p\_op   = if\_abap\_behv=>op-r-read
    ).
    out->write( tdo ).
    "Getting absolute name using the created type description object
    DATA(abs\_itab) = tdo->absolute\_name.
    "Getting absolute name using the get\_abs\_typename method
    "The p\_structure parameter is flagged. Therefore, a structured type
    "is created.
    DATA(abs\_struc) = cl\_abap\_behvdescr=>get\_abs\_typename(
      p\_name      = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root      = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind      = if\_abap\_behv=>typekind-result
      p\_op        = if\_abap\_behv=>op-m-create
      p\_structure = 'X' ).
    out->write\_data( abs\_itab ).
    out->write\_data( abs\_struc ).
    "Using the type description objects and absolute names to create
    "anonymous data objects dynamically
    DATA dref TYPE REF TO data.
    CREATE DATA dref TYPE HANDLE tdo.
    "Using the dynamically created internal table in an EML statement
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH VALUE #( ( key\_field       = 1
                                 key\_field\_child = 10 ) )
      RESULT dref->\*.
    out->write\_data( dref->\* ).
    "Using absolute name
    CREATE DATA dref TYPE (abs\_itab).
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH VALUE #( ( key\_field       = 2
                                 key\_field\_child = 20 ) )
      RESULT dref->\*.
    out->write\_data( dref->\* ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Creating data object with BDEF derived type
    out->next\_section( \`create\_data\` ).
    DATA(der\_type) = cl\_abap\_behvdescr=>create\_data(
      p\_name = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind = if\_abap\_behv=>typekind-import
      p\_op   = if\_abap\_behv=>op-r-read
    ).
    "Getting absolute name using RTTI
    DATA(abs\_der) = cl\_abap\_typedescr=>describe\_by\_data( der\_type->\*
      )->absolute\_name.
    out->write\_data( abs\_der ).
    "Using the created data object in an EML statement
    DATA itab TYPE TABLE OF demo\_managed\_child\_4.
    itab = VALUE #( ( key\_field = 1 key\_field\_child = 10 ) ).
    der\_type->\* = CORRESPONDING #( itab ).
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH der\_type->\*
      RESULT DATA(read\_result).
    out->write\_data( read\_result ).
    "Type description object for a structured type
    DATA(der\_s) = cl\_abap\_behvdescr=>get\_type(
      p\_name      = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root      = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind      = if\_abap\_behv=>typekind-result
      p\_op        = if\_abap\_behv=>op-r-read
      p\_structure = 'X'
    ).
    "Creating an anonymous structure
    DATA dref\_struc TYPE REF TO data.
    CREATE DATA dref\_struc TYPE HANDLE der\_s.
    "Creating an internal table based on the structure
    DATA der\_itab TYPE REF TO data.
    CREATE DATA der\_itab LIKE TABLE OF dref\_struc->\*.
    "Using the internal table in an EML statement
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH VALUE #( ( key\_field = 1 key\_field\_child = 10 )
                               ( key\_field = 2 key\_field\_child = 20 ) )
      RESULT der\_itab->\*.
    "Filling the anonymous structure
    READ TABLE der\_itab->\* INTO dref\_struc->\* WITH KEY
      ('KEY\_FIELD') = 2.
    out->write\_data( dref\_struc->\* ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting/Setting %control fields
    out->next\_section( \`get\_control\_fields / set\_control\_flag \`
      && \`get\_control\_flag\` ).
    "get\_control\_fields
    DATA der TYPE TABLE FOR CREATE demo\_managed\_root\_4.
    der = VALUE #( ( %cid               = 'cid1'
                     key\_field          = 1
                     %control-key\_field = if\_abap\_behv=>mk-on
                     field1             = 'aaa\_cr'
                     %control-field1    = if\_abap\_behv=>mk-on
                     field2             = 'bbb\_cr'
                     %control-field2    = if\_abap\_behv=>mk-off
                     field3             = 2
                     %control-field3    = if\_abap\_behv=>mk-on
                     field4             = 3
                     %control-field4    = if\_abap\_behv=>mk-on ) ).
    DATA(ctrl) = cl\_abap\_behvdescr=>get\_control\_fields( p\_data = der ).
    out->write\_data( ctrl ).
    ctrl = cl\_abap\_behvdescr=>get\_control\_fields(
      p\_data = der
      p\_flag = cl\_abap\_behv=>flag\_null ).
    out->write\_data( ctrl ).
    "set\_control\_flag
    cl\_abap\_behvdescr=>set\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD1\` )
                            ( \`FIELD4\` ) )
        p\_flag   = cl\_abap\_behv=>flag\_null
      CHANGING
        p\_data   = der ).
    cl\_abap\_behvdescr=>set\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD2\` ) )
        p\_flag   = cl\_abap\_behv=>flag\_changed
      CHANGING
        p\_data   = der ).
    out->write\_data( der\[ 1 \]-%control ).
    "get\_control\_flag
    cl\_abap\_behvdescr=>get\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD1\` ) )
        p\_data   = der
      IMPORTING
        p\_flag   = DATA(get\_ctrl) ).
    out->write\_data( get\_ctrl ).
    cl\_abap\_behvdescr=>get\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD2\` ) )
        p\_data   = der
      IMPORTING
        p\_flag   = get\_ctrl ).
    out->write\_data( get\_ctrl ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting foreign entities/alias names
    out->next\_section( \`get\_foreign\_entities\` ).
    DATA(f\_ent) = cl\_abap\_behvdescr=>get\_foreign\_entities(
      CONV abp\_entity\_name( 'DEMO\_UNMANAGED\_MAP\_MESSAGES' ) ).
    out->write\_data( f\_ent ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Get API classifications
    out->next\_section( \`get\_contracts\` ).
    cl\_abap\_behvdescr=>get\_contracts(
      EXPORTING
        name      = 'CL\_DEMO\_CLASSIFIED\_APIS'
        kind      = 'K'
      IMPORTING
        contracts = DATA(contracts) ).
    out->write\_data( contracts ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_child\_3.
    MODIFY demo\_tab\_child\_3 FROM TABLE @( VALUE #(
      ( key\_field       = 1
        key\_field\_child = 10
        field1          = \`abc\`
        field2          = \`def\`
        field3          = 100
        field4          = 1000 )
      ( key\_field       = 2
        key\_field\_child = 20
        field1          = \`ghi\`
        field2          = \`jkl\`
        field3          = 200
        field4          = 2000 ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The class demonstrates various methods of the CL\_ABAP\_BEHVDESCR class, for example, for getting [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") information or creating types.


### abapcl_abap_behvdescr.htm

---
title: "Further Information"
description: |
  For more information, see the class documentation and the Runtime Type Services (RTTS)(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) topic. Executable Example Getting Type Information Using CL_ABAP_BEHVDESCR(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcl_abap_behvdescr.htm"
abapFile: "abapcl_abap_behvdescr.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abapcl", "abap", "behvdescr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHVDESCR%2C%20ABAPCL_ABAP_BEHVDESCR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHVDESCR

The class CL\_ABAP\_BEHVDESCR contains methods for [Runtime Type Creation (RTTI)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") and [Runtime Type Creation (RTTC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") in the context of [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") in RAP. This means that BDEF derived type information can be retrieved at runtime. Derived types can also be defined at runtime.

The following list shows a selection of available methods:

-   GET\_ROOT, GET\_ROOTS\_OF\_ENTITIES: Getting the root entity or entities for a given entity
-   GET\_TYPE: Getting runtime type information for entities and operations
-   CREATE\_DATA: Creating data objects typed with BDEF derived types (CRUD or action)
-   GET\_ABS\_TYPENAME: Getting the [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") for entities and operations
-   SET\_CONTROL\_FLAG, GET\_CONTROL\_FLAG, GET\_CONTROL\_FIELDS: Filling or getting [%control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_control.htm) fields
-   GET\_FOREIGN\_ENTITIES: Getting [RAP foreign entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") and aliases
-   GET\_CONTRACTS: Getting [API classification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapapi_classification.htm)

Further Information

For more information, see the class documentation and the [Runtime Type Services (RTTS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) topic.

Executable Example

[Getting Type Information Using CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_info_abexa.htm)

Continue
![Example](exa.gif "Example") [Getting BDEF Derived Type Information Using CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_info_abexa.htm)
