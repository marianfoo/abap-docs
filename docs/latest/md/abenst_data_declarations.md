  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Data%20Declarations%2C%20ABENST_DATA_DECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Data Declarations

In ST programs, data can be declared using the following statements:

-   [tt:root](javascript:call_link\('abenst_tt_root.htm'\)) defines data roots for binding ABAP data interfaces.
-   [tt:parameter](javascript:call_link\('abenst_tt_parameter.htm'\)) defines parameters as formal parameters.
-   [tt:variable](javascript:call_link\('abenst_tt_variable.htm'\)) defines variables as local data.

If these statements are specified outside of a template in the context of the transformation, the data declarations apply to the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)).

Within a [subtemplate](javascript:call_link\('abenst_tt_template_sub.htm'\)), the statements can be used in the element tt:context to declare local data of the subtemplate.

Continue
[ST - tt:root, Data Roots](javascript:call_link\('abenst_tt_root.htm'\))
[ST - tt:parameter, Parameters](javascript:call_link\('abenst_tt_parameter.htm'\))
[ST - tt:variable, Variables](javascript:call_link\('abenst_tt_variable.htm'\))