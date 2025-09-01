  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_dynamic.htm) →  [Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_dynpro.htm) →  [Internal Statements for Editing Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_dynpro_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%20DYNPRO%2C%20ABAPEXPORT_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

EXPORT DYNPRO h f e m ID id.

Effect

Exports the [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") with the name in the id. The dynpro information is taken from the structure h (dynpro header, dictionary structure D020S) and the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). Standard tables without secondary keys can be specified for f, e, and m.