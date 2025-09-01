  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

Business Object

A business object in the [ABAP RESTful Programming Model](javascript:call_link\('abenr_a_p_glosry.htm'\) "Glossary Entry") provides following functions:

-   A data model that defines the data structure explicitly (such as relations between datasets, data semantics, and their restrictions).

-   The behavior of the data model, consisting of:

-   The lifecycle of the data (such as create, update, and delete)

-   Further operations performed on data (such as actions)

-   Transactional properties of the data model (such as the implementation type).

The formal structure of a business object consists of a tree of entities joined by [associations](javascript:call_link\('abenassociation_glosry.htm'\) "Glossary Entry"). The ABAP RESTful Programming Model uses [ABAP CDS](javascript:call_link\('abencds.htm'\)) to define the data model for business objects. Each business object contains a top node (the leading entity) known as the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").

The behavior of the business object is defined in a [behavior definition](javascript:call_link\('abenabap_behavior_definitions.htm'\)) and implemented in an associated [behavior implementation](javascript:call_link\('abenabap_behavior_implementations.htm'\)).