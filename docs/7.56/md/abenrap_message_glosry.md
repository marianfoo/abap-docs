  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

RAP message

Message that is represented by an instance of a class that implements the interface IF\_ABAP\_BEHV\_MESSAGE and is used in [RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") implementations.

Each application can create its own classes. For convenience, each [behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") contains a predefined local [exception class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_class_glosry.htm "Glossary Entry") CL\_ABAP\_BEHV\_MSG inherited from CX\_NO\_CHECK that implements IF\_ABAP\_BEHV\_MESSAGE in a minimalistic way. It can be used for RAP messages as well as for raising [exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_glosry.htm "Glossary Entry") where appropriate.