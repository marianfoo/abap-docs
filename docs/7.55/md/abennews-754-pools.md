  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) →  [ABAP RESTful Programming Model in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-restful.htm) → 

Behavior Pool in Release 7.54

[1\. Arbitrary name for handler methods](#!ABAP_MODIFICATION_1@1@)
[2\. No exceptions](#!ABAP_MODIFICATION_2@2@)

Modification 1

Arbitrary Name for Handler Methods

The method name in [handler classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm) is now arbitrary. This generalization makes it possible to include multiple methods in a handler class and, for example, to implement an action using a method. This enables the behavior implementation of a business object without introducing a corresponding number of handler classes.

Modification 2

No Exceptions

Triggering exceptions in [BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm) methods is prohibited. The attempt RAISE EXCEPTION will lead to a runtime error.