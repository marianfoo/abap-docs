  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

release contract

Classification of a [repository object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry") that specifies how it can be used as an API. There are currently three different release contracts: C0, which permits enhancement fields to be added at specified enhancement points, C1, which guarantees a stable interface for use within [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), and C2, which guarantees a stable interface for use outside AS ABAP too. Objects are classified in [ADT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") or using special transactions such as SCFD\_REGISTRY or SCLAS\_API\_C2.