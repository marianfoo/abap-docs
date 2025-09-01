  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

Business Object

A business object in the [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm "Glossary Entry") provides following functions:

-   A data model that defines the data structure explicitly (such as relations between datasets, data semantics, and their restrictions).

-   The behavior of the data model, consisting of:

-   The lifecycle of the data (such as create, update, and delete)

-   Further operations performed on data (such as actions)

-   Transactional properties of the data model (such as the implementation type).

The formal structure of a business object consists of a tree of entities joined by [associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassociation_glosry.htm "Glossary Entry"). The ABAP RESTful Programming Model uses [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) to define the data model for business objects. Each business object contains a top node (the leading entity) known as the [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry").

The behavior of the business object is defined in a [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) and implemented in an associated [behavior implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm).