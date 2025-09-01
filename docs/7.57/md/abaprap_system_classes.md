  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP-Related System Classes, ABAPRAP_SYSTEM_CLASSES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

RAP-Related System Classes

The class CL\_ABAP\_BEHV\_AUX contains methods for retrieving information about the context of the current [RAP handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") or [saver method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") and the kind of method.

For example, regarding the context information: When a behavior is accessed via a [CDS interface behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), this access is directly mapped to a request on the base [RAP business object (BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A use case might be that the base BO implementation would like to have the information available that it was invoked via a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). For example, a RAP BO interface implements specific logic (for example, some fields are dynamically set to read-only) in the base BO's behavior pool. The implementation in the base BO requires then the name of the RAP BO interface which can be retrieved using the methods of this class.

Similarly, the base BO implementation might be interested in the knowing whether it was invoked by a [RAP projection extension entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry").

Example

The following code snippet shows how information on the current context might be retrieved using the get\_current\_context method by storing the information in a variable [declared inline](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry").

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING
      from\_projection = FINAL(fr\_proj)
      from\_interface  = FINAL(fr\_int)
      in\_local\_mode   = FINAL(loc\_mode)
      draft\_activate  = FINAL(dr\_act)
      for\_permissions = FINAL(for\_perm)
      privileged      = FINAL(priv) ).

Executable Examples

-   The example [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cl_abap_behv_aux_abexa.htm) demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.
-   The example [Using the Addition PRIVILEGED with an ABAP EML Statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_privileged_abexa.htm) demonstrates the addition PRIVILEGED using an [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaction_glosry.htm "Glossary Entry") and a managed RAP BO. In this example, the method get\_current\_context is used to retrieve the information whether the running handler is running in privileged mode.

Continue
![Example](exa.gif "Example") [Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cl_abap_behv_aux_abexa.htm)