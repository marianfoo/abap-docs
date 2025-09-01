  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740.htm) →  [News for Release 7.40, SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp08.htm) → 

ABAP Objects in Release 7.40, SP08

Modification

Optional Interface Methods

The new addition [DEFAULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_default.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods.htm) can be used to make general methods, functional methods, plus event handlers of [interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_intf_glosry.htm "Glossary Entry") optional. An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, a default behavior is specified for calls of non-implemented methods in the definition. DEFAULT IGNORE calls an empty method and DEFAULT FAIL raises an exception.