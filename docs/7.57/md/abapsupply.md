  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SUPPLY, ABAPSUPPLY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

SUPPLY

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsupply_shortref.htm)

Obsolete Syntax

SUPPLY key1 = f1 key2 = f2 ... TO CONTEXT context\_ref.

Effect

This statement fills the key fields key1 key2 ... of a [context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext_glosry.htm "Glossary Entry") instance with the values of data objects f1 f2 ... context\_ref expects a data object that points to a context instance (see [CONTEXTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontexts.htm)). The names of key fields of the corresponding context can be specified for key1 key2 ... f1 f2 ... expects data objects whose data type matches the corresponding key field key1 key2 ...

The SUPPLY statement overwrites only the specified key fields with new values. If not all key fields are specified, the previous values are kept. The values of all fields of the context instance derived from a changed key field are invalidated by the SUPPLY statement.