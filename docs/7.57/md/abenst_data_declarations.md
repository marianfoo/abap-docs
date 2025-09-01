  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_programs_structure.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Data Declarations, ABENST_DATA_DECLARATIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

ST - Data Declarations

In ST programs, data can be declared using the following statements:

-   [tt:root](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_root.htm) defines data roots for binding ABAP data interfaces.
-   [tt:parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_parameter.htm) defines parameters as formal parameters.
-   [tt:variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_variable.htm) defines variables as local data.

If these statements are specified outside of a template in the context of the transformation, the data declarations apply to the [main template](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_template_main.htm).

Within a [subtemplate](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_template_sub.htm), the statements can be used in the element tt:context to declare local data of the subtemplate.

Continue
[ST - tt:root, Data Roots](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_root.htm)
[ST - tt:parameter, Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_parameter.htm)
[ST - tt:variable, Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_variable.htm)