# ABAP - Keyword Documentation / ABAP - Programming Language / Program Maintenance / Dynamic Program Development / Dynpro

Included pages: 8


### abenabap_generic_dynpro.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Dynpro%2C%20ABENABAP_GENERIC_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Dynpro

The statements for creating and editing [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are not released for application programming and cannot be used in application programs.

Continue
[Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\))


### abengeneric_dynpro_internal.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Statements%20for%20Editing%20Dynpros%2C%20ABENGENERIC_DYNPRO_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Internal Statements for Editing Dynpros

These statements are for internal use only.
Do not use them in application programs.

-   [EXPORT DYNPRO](javascript:call_link\('abapexport_dynpro.htm'\))
-   [IMPORT DYNPRO](javascript:call_link\('abapimport_dynpro.htm'\))
-   [DELETE DYNPRO](javascript:call_link\('abapdelete_dynpro.htm'\))
-   [SYNTAX-CHECK FOR DYNPRO](javascript:call_link\('abapsyntax-check_for_dynpro.htm'\))
-   [GENERATE DYNPRO](javascript:call_link\('abapgenerate_dynpro.htm'\))

Continue
[EXPORT DYNPRO](javascript:call_link\('abapexport_dynpro.htm'\))
[IMPORT DYNPRO](javascript:call_link\('abapimport_dynpro.htm'\))
[DELETE DYNPRO](javascript:call_link\('abapdelete_dynpro.htm'\))
[SYNTAX-CHECK FOR DYNPRO](javascript:call_link\('abapsyntax-check_for_dynpro.htm'\))
[GENERATE DYNPRO](javascript:call_link\('abapgenerate_dynpro.htm'\))


### abapexport_dynpro.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%20DYNPRO%2C%20ABAPEXPORT_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

EXPORT DYNPRO h f e m ID id.

Effect

Exports the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the name in the id. The dynpro information is taken from the structure h (dynpro header, dictionary structure D020S) and the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). Standard tables without secondary keys can be specified for f, e, and m.


### abapimport_dynpro.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%20DYNPRO%2C%20ABAPIMPORT_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

IMPORT DYNPRO h f e m ID id.

Effect

The [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") specified in the structure id is imported. To enable this, the structure id must contain two components for the name of the program and the ID of the dynpro in the following order:

-   A component of type PROGNAME
-   A component of type SYDYNNR.

The dynpro information is loaded into the structure h (dynpro header, structure D020S) and into the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). Standard tables without secondary keys can be specified for f, e, and m.

Hint

As an alternative to a structure, a character-like field (including string) can be specified for id, where the field contains the chained content of the structure components, including trailing blanks.

System Fields

sy-subrc

Meaning

0

The dynpro was imported.

4

The dynpro does not exist.

Example

Reading of the properties of dynpro 0100 of the program DEMO\_DYNPRO.

DATA h TYPE d020s.
DATA f TYPE TABLE OF d021s.
DATA e TYPE TABLE OF d022s.
DATA m TYPE TABLE OF d023s.
DATA: BEGIN OF id,
         p TYPE progname VALUE 'DEMO\_DYNPRO',
         d TYPE sydynnr  VALUE '0100',
       END OF id.
IMPORT DYNPRO h f e m ID id.


### abapdelete_dynpro.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20DYNPRO%2C%20ABAPDELETE_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE DYNPRO f.

Effect

Deletes the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the name specified in the field f.

System Fields

sy-subrc

Meaning

0

The dynpro was deleted.

4

The dynpro does not exist.

The content of f consists of the 40 character program name and the four digit [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry").

Example

DATA DYNPRONAME(44) VALUE 'SAPTEST'.
DYNPRONAME+40 = '0100'.
DELETE DYNPRO DYNPRONAME.


### abapsyntax-check_for_dynpro.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYNTAX-CHECK%20FOR%20DYNPRO%2C%20ABAPSYNTAX-CHECK_FOR_DYNPRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SYNTAX-CHECK FOR DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

SYNTAX-CHECK FOR DYNPRO h f e m ...MESSAGE f1 ...LINE f2
                                ...WORD f3.

Additions:

[1\. ... OFFSET f4](#!ABAP_ADDITION_1@1@)
[2\. ... TRACE-TABLE itab1](#!ABAP_ADDITION_2@2@)
[3\. ... MESSAGE-ID f5](#!ABAP_ADDITION_3@3@)

Effect

The [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") description is taken from the structure h and the internal tables f, e, and m. The structure h (dynpro header) should correspond to the structure D020S, the internal table f (field list) to the structure D021S, the internal table e (flow logic) to the structure D022S, and the internal table m (matchcode information) to the structure D023S. Standard tables without secondary keys can be specified for f, e, and m.

Example

DATA: DHEAD    TYPE D020S,                   "dynpro header
      DFIELDS  TYPE TABLE OF D021S,          "field list
      DFLOWL   TYPE TABLE OF D022S,          "flow logic
      MCINFO   TYPE TABLE OF D023S.          "matchcode information

If a syntax error is detected during the check, the fields f1, f2, and f3 are filled as follows:

-   f1 contains the error message text.
-   f2 contains the dynpro line where the error occurred
-   f3 contains the incorrect word in the dynpro

System Fields

sy-subrc

Meaning

0

The dynpro has no syntax errors.

4

The dynpro has syntax errors.

Addition 1   

... OFFSET f4

Effect

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

Addition 2   

... TRACE-TABLE itab1

Effect

Any trace output is stored in this table. Trace output is automatically activated when this addition is specified. A standard table without secondary keys can be specified for itab1.

Addition 3   

... MESSAGE-ID f5

Effect

If a syntax error occurs, the key of the corresponding error message is returned in field f5. This key has the same structure as the key of table TRMSG.


### abapgenerate_dynpro.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

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

Generates the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") specified in the field g.
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


### abengeneric_dynpro_internal.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Statements%20for%20Editing%20Dynpros%2C%20ABENGENERIC_DYNPRO_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Internal Statements for Editing Dynpros

These statements are for internal use only.
Do not use them in application programs.

-   [EXPORT DYNPRO](javascript:call_link\('abapexport_dynpro.htm'\))
-   [IMPORT DYNPRO](javascript:call_link\('abapimport_dynpro.htm'\))
-   [DELETE DYNPRO](javascript:call_link\('abapdelete_dynpro.htm'\))
-   [SYNTAX-CHECK FOR DYNPRO](javascript:call_link\('abapsyntax-check_for_dynpro.htm'\))
-   [GENERATE DYNPRO](javascript:call_link\('abapgenerate_dynpro.htm'\))

Continue
[EXPORT DYNPRO](javascript:call_link\('abapexport_dynpro.htm'\))
[IMPORT DYNPRO](javascript:call_link\('abapimport_dynpro.htm'\))
[DELETE DYNPRO](javascript:call_link\('abapdelete_dynpro.htm'\))
[SYNTAX-CHECK FOR DYNPRO](javascript:call_link\('abapsyntax-check_for_dynpro.htm'\))
[GENERATE DYNPRO](javascript:call_link\('abapgenerate_dynpro.htm'\))
