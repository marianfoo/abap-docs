  

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