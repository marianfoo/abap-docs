  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for ABAP Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Enhancements%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-ENHANCEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Enhancements in ABAP Release 7.0, EhP2

[1\. Exception Handling in CALL BADI](#!ABAP_MODIFICATION_1@1@)
[2\. Dynamic GET BADI and CALL BADI](#!ABAP_MODIFICATION_2@2@)
[3\. Nested Source Code Enhancements](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Exception Handling in CALL BADI

Until now, the CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD exception was raised when the implementation of a method in [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)) was missing. The exception is now caught internally and the call is executed as if the method were present with an empty implementation. Actual parameters that are bound to EXPORTING or RETURNING parameters passed by value are initialized. All other actual parameters remain unchanged.

Hint

This change has also been downported to ABAP release 7.0.

Modification 2   

Dynamic GET BADI and CALL BADI

Dynamic variants have been added to the [GET BADI](javascript:call_link\('abapget_badi.htm'\)) and [CALL BADI](javascript:call_link\('abapget_badi.htm'\)) statements, which allow the BAdI or BAdI method to be specified dynamically.

Modification 3   

Nested Source Code Enhancements

From ABAP release 7.0 EhP2, it is possible to enhance a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") defined between [ENHANCEMENT - ENDENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)) with additional source code plug-ins. This means the [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)) and [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)) statements can be used in a source code plug-in.

In addition, [implicit enhancement options](javascript:call_link\('abenimplicit_enh_points.htm'\)) are now available before the first line and after the last line of a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") (after ENHANCEMENT and before ENDENHANCEMENT).