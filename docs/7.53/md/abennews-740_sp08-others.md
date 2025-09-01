  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp08.htm) → 

Further Changes in Release 7.40, SP08

[1\. Constants for maximum lengths of elementary data types](#!ABAP_MODIFICATION_1@1@)

[2\. Time resolution in WAIT UP TO](#!ABAP_MODIFICATION_2@2@)

[3\. Reference documentation for ABAP Dictionary](#!ABAP_MODIFICATION_3@3@)

Modification 1

Constants for Maximum Lengths of Elementary Data Types

From Release 7,40, SP08, the system class CL\_ABAP\_ELEMDESCR contains the constants TYPE\_P\_MAX\_LENGTH, TYPE\_P\_MAX\_DECIMALS, TYPE\_C\_MAX\_LENGTH, TYPE\_N\_MAX\_LENGTH, and TYPE\_X\_MAX\_LENGTH for the maximum lengths and decimal places of the generic elementary data types [p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [c](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_character.htm), [n](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_character.htm), and [x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_byte.htm).

Modification 2

Time Resolution in WAIT UP TO

In Release 7,40, SP08, the operand type of the operand sec of the statement [WAIT UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm) was changed from i to f and the time resolution changed from seconds to milliseconds. There is no longer any difference here from the variants [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm) and [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_amc.htm).

Modification 3

Reference Documentation for ABAP Dictionary

Reference documentation for the most important ABAP Dictionary objects in the programming language is now available under the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) node in the ABAP keyword documentation.