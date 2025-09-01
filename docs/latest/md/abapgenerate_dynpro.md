  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_dynamic.htm) →  [Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_dynpro.htm) →  [Internal Statements for Editing Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_dynpro_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GENERATE%20DYNPRO%2C%20ABAPGENERATE_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GENERATE DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

GENERATE DYNPRO h f e m ID g.
... MESSAGE f1 ... LINE f2 ... WORD f3.

Additions:

[1\. ... OFFSET f4](#!ABAP_ADDITION_1@1@)
[2\. ... TRACE-FILE f5](#!ABAP_ADDITION_2@2@)

Effect

Generates the [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") specified in the field g.
The source code is taken from the structure h and the internal tables f, e, and m. The field h( =dynpro header) should correspond to the structure D020S, the internal table f (=field list) should correspond to the structure D021S, the internal table e (=flow logic) should correspond to the structure D022S, and the internal table m (=matchcode information) should correspond to the structure D023S. Standard tables without secondary keys can be specified for f, e, and m.
If a syntax error occurs, the error message is stored in the field f1.
If a syntax error occurs, the number of the incorrect line is stored in the field f2.
By querying the return code, it is possible to determine whether this line refers to the flow logic or the field list.
If a syntax error occurs, the incorrect word is stored in the field f3.

System Fields

sy-subrc

Meaning

0

The dynpro was generated.

4

The dynpro could not be generated. The specified error position is in the flow logic.

8

The dynpro could not be generated. The specified error position is in the field list.

Addition 1   

... OFFSET f4

Effect

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

Addition 2   

... TRACE-FILE f5

Effect

Trace output is stored in this file. This addition automatically activates trace mode.