  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp08.htm) → 

ABAP Objects in Release 7.40, SP08

[1\. Optional interface methods](#!ABAP_MODIFICATION_1@1@)

Modification 1

Optional Interface Methods

The new addition [DEFAULT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_default.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods.htm) can be used to make general methods, functional methods, plus event handlers of [interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_oo_glosry.htm "Glossary Entry") optional. An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, a default behavior is specified for calls of non-implemented methods in the definition. DEFAULT IGNORE calls an empty method and DEFAULT FAIL raises an exception.