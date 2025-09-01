  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP08](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740_sp08.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20in%20ABAP%20Release%207.40%2C%20SP08%2C%20ABENNEWS-740_SP08-ABAP_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

ABAP Objects in ABAP Release 7.40, SP08

Modification

Optional Interface Methods

The new addition [DEFAULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_default.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods.htm) can be used to make general methods, functional methods, plus event handlers of [interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoo_intf_glosry.htm "Glossary Entry") optional. An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, a default behavior is specified for calls of non-implemented methods in the definition. DEFAULT IGNORE calls an empty method and DEFAULT FAIL raises an exception.