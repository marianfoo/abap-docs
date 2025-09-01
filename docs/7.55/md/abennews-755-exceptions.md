  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-755.htm) → 

Exception Handling in Release 7.55

[1\. Declaration of CX\_NO\_CHECK exceptions](#!ABAP_MODIFICATION_1@1@)

Modification 1

Declaration of CX\_NO\_CHECK exceptions

Exceptions of category CX\_NO\_CHECK are always declared implicitly in interfaces of procedures and can always be propagated.

Now it is also possible to declare exceptions of category CX\_NO\_CHECK with RAISING in procedure interfaces, for example for [methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_general.htm). This allows it to document the possible occurrence of such exceptions and to change the category of existing exceptions into CX\_NO\_CHECK without leading to syntax errors in procedure interfaces.