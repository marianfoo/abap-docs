  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Parameters in the User Memory](javascript:call_link\('abenmemory.htm'\)) → 

GET PARAMETER

[Quick Reference](javascript:call_link\('abapget_parameter_shortref.htm'\))

Syntax

GET PARAMETER ID pid FIELD dobj.

Effect

This statement sets the content of the data object dobj to the content of the [SPA/GPA](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") parameter specified in pid in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"). The ID pid must be a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like field that contains no more than 20 characters and does not consist solely of blanks. The field is case-sensitive. The binary content of the SPA/GPA parameter is passed to dobj without being converted. The following can be specified for dobj:

-   An existing flat character-like variable.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type XUVALUE is declared.
    

The statement GET PARAMETER does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [program memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry"), which is loaded when rolled in and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](javascript:call_link\('abenmemory.htm'\))). If the SPA/GPA parameter specified in pid does not yet exist in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") for the current user, the data object dobj is initialized and sy-subrc is set to 4.

A program can only read those SPA/GPA parameters for which there is a name in the table TPARA. If it is known statically that an ID pid is not in the database table TPARA, the extended program check reports an error.

System Fields

sy-subrc

Meaning

0

The SPA/GPA parameter specified in pid exists for the current user in the user memory and its value was passed to the target field.

4

The SPA/GPA parameter specified in pid does not exist for the current user in the user memory.

Notes

-   An SPA/GPA parameter that is readable using GET PARAMETER can either have been created previously in the user memory using the statement [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) or created automatically in the [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") event of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").
    
-   An SPA/GPA parameter specified in pid must be entered in uppercase to match a name in the database table TPARA.
    
-   The statements SET PARAMETER and GET PARAMETER do not work directly with the SPA/GPA parameters of the user memory, which means that they are only suitable for passing data within a single [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") and not for passing data between two main sessions in parallel. This is because programs that run in parallel can change the state of the parameters unpredictably.
    

Example

In this example, the current value of the SPA/GPA parameter RID is read from the user memory to the data object prog. In the dynpros in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), this parameter is associated with the input fields for a program name. When an ABAP Workbench tool in which an ABAP program is processed, is first called, the parameter is created in the event PAI and assigned the name of the program specified there. If, in the same user session, no dynpro is processed that sets the parameter RID and no corresponding SET PARAMETER statement was executed beforehand, RID is not found in the user memory.

DATA: para TYPE tpara-paramid VALUE 'RID',
      prog TYPE sy-repid.
GET PARAMETER ID para FIELD prog.
IF sy-subrc <> 0.
  MESSAGE 'Parameter not found' TYPE 'I'.
ENDIF.