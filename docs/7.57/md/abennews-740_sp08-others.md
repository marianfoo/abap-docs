  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 7.40, SP08, ABENNEWS-740_SP08-OTHERS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 7.40, SP08

[1\. Constants for Maximum Lengths of Elementary Data Types](#!ABAP_MODIFICATION_1@1@)
[2\. Time Resolution in WAIT UP TO](#!ABAP_MODIFICATION_2@2@)
[3\. Reference Documentation for ABAP Dictionary](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Constants for Maximum Lengths of Elementary Data Types

From Release 7.40, SP08, the system class CL\_ABAP\_ELEMDESCR contains the constants TYPE\_P\_MAX\_LENGTH, TYPE\_P\_MAX\_DECIMALS, TYPE\_C\_MAX\_LENGTH, TYPE\_N\_MAX\_LENGTH, and TYPE\_X\_MAX\_LENGTH for the maximum lengths and decimal places of the generic elementary data types [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [c](javascript:call_link\('abenbuiltin_types_character.htm'\)), [n](javascript:call_link\('abenbuiltin_types_character.htm'\)), and [x](javascript:call_link\('abenbuiltin_types_byte.htm'\)).

Modification 2   

Time Resolution in WAIT UP TO

In Release 7.40, SP08, the operand type of the operand sec of the statement [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)) was changed from i to f and the time resolution changed from seconds to milliseconds. There is no longer any difference here from the variants [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)) and [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)).

Modification 3   

Reference Documentation for ABAP Dictionary

Reference documentation for the most important ABAP Dictionary objects in the programming language is now available under the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) node in the ABAP keyword documentation.