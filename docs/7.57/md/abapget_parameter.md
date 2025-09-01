  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [SPA/GPA Parameters in the User Memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET PARAMETER, ABAPGET_PARAMETER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

GET PARAMETER

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter_shortref.htm)

Syntax

GET PARAMETER ID pid FIELD dobj.

Effect

This statement sets the content of the data object dobj to the content of the [SPA/GPA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") parameter specified in pid in the [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry"). The ID pid expects a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like field that contains a maximum of 20 characters and not only blanks. The field is case-sensitive. The binary content of the SPA/GPA parameter is passed to dobj without being converted. The following can be specified for dobj:

-   An existing flat character-like variable.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable of type XUVALUE is declared.

The statement GET PARAMETER does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [session memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroll_area_glosry.htm "Glossary Entry"), which is loaded during roll-in and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa.htm)). If the SPA/GPA parameter specified in pid does not yet exist in the [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry") for the current user, the data object dobj is initialized and sy-subrc is set to 4.

A program can only read those SPA/GPA parameters for which there is a name in the table TPARA. If it is possible to statically determine that an ID specified pid is not in the database table TPARA, the extended program check reports an error.

System Fields

sy-subrc

Meaning

0

The SPA/GPA parameter specified in pid exists for the current user in the user memory and its value was passed to the target field.

4

The SPA/GPA parameter specified in pid does not exist for the current user in the user memory.

Hints

-   An SPA/GPA parameter that can be read using GET PARAMETER can either have been created previously using the statement [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm) or created automatically in the [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") event of a [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") or [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") in the user memory.
-   An SPA/GPA parameter specified in pid must be entered in uppercase to match a name in the database table TPARA.
-   Since the statements SET PARAMETER and GET PARAMETER do not work directly with the SPA/GPA parameters of the user memory, they are only suitable for passing data within an [ABAP session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") and not for passing data between parallel ABAP sessions because programs that run in parallel can affect the state of the parameters in an uncontrolled manner.

Example

In this example, the current value of the SPA/GPA parameter RID is read from the user memory to the data object prog. In the dynpros in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), this parameter is linked to the input fields for a program name. When an ABAP Workbench tool in which an ABAP program is processed, is first called, the parameter is created in the event PAI and assigned the name of the program specified there. If, in the same user session, no dynpro was processed that sets the parameter RID and no corresponding SET PARAMETER statement was executed beforehand, RID is not found in the user memory.

DATA: para TYPE tpara-paramid VALUE 'RID',
      prog TYPE sy-repid.
GET PARAMETER ID para FIELD prog.
IF sy-subrc <> 0.
  MESSAGE 'Parameter not found' TYPE 'I'.
ENDIF.