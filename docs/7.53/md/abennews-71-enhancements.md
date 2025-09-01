  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-71.htm) → 

Enhancements in Release 7.0, EhP2

[1\. Exception handling in CALL BADI](#!ABAP_MODIFICATION_1@1@)

[2\. Dynamic GET BADI and CALL BADI](#!ABAP_MODIFICATION_2@2@)

[3\. Nested source code enhancements](#!ABAP_MODIFICATION_3@3@)

Modification 1

Exception Handling in CALL BADI

Until now, the CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD exception was raised when the implementation of a method in [CALL BADI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_badi.htm) was missing. The exception is now caught internally and the call is executed as if the method were present with an empty implementation. Actual parameters that are bound to EXPORTING or RETURNING parameters passed by value are initialized. All other actual parameters remain unchanged.

Note

This change has also been downported to Release 7.0.

Modification 2

Dynamic GET BADI and CALL BADI

Dynamic variants have been added to the [GET BADI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_badi.htm) and [CALL BADI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_badi.htm) statements, which allow the BAdI or BAdI method to be specified dynamically.

Modification 3

Nested source code enhancements

From Release 7.0 EhP2, it is possible to enhance a [source code plug-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") defined between [ENHANCEMENT - ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement.htm) with additional source code plug-ins. This means the [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-point.htm) and [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-section.htm) statements can be used in a source code plug-in.

In addition, [implicit enhancement options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenimplicit_enh_points.htm) are now available before the first line and after the last line of a [source code plug-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") (after ENHANCEMENT and before ENDENHANCEMENT).