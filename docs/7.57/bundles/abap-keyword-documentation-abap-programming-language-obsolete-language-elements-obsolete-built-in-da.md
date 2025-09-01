# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Built-In Data Objects

Included pages: 3


### abenbuilt_in_obsolete.htm

---
title: "Obsolete Built-In Data Objects"
description: |
  -   Obsolete System Fields(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields_obsolete.htm) -   The Built-In Structure screen(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm) Obsolete System Fields(https://help.sap.com/doc/
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_obsolete.htm"
abapFile: "abenbuilt_in_obsolete.htm"
keywords: ["do", "if", "data", "abenbuilt", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Built-In Data Objects, ABENBUILT_IN_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Built-In Data Objects

-   [Obsolete System Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields_obsolete.htm)
-   [The Built-In Structure screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm)

Continue
[Obsolete System Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields_obsolete.htm)
[The Built-In Structure screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm)


### abensystem_fields_obsolete.htm

---
title: "Obsolete System Fields"
description: |
  -   Former System Fields(#abensystem-fields-obsolete-1-------spool-parameters---@ITOC@@ABENSYSTEM_FIELDS_OBSOLETE_2) Former System Fields The following system fields(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm 'Glossary Entry') are obsolete and should n
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields_obsolete.htm"
abapFile: "abensystem_fields_obsolete.htm"
keywords: ["select", "delete", "loop", "do", "if", "try", "data", "internal-table", "abensystem", "fields", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Built-In Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete System Fields, ABENSYSTEM_FIELDS_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Obsolete System Fields

-   [Former System Fields](#abensystem-fields-obsolete-1-------spool-parameters---@ITOC@@ABENSYSTEM_FIELDS_OBSOLETE_2)

Former System Fields   

The following [system fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") are obsolete and should no longer be used. Many originate from the R/2 era. The transition from R/2 to R/3 retained some system fields which are no longer provided with data.

Name

Type

Length

Content

sy-appli

x

2

In R/2, ID for which SAP applications are installed. No longer filled.

sy-batzd

c

1

In R/2, ID for daily background scheduling. No longer filled.

sy-batzm

c

1

In R/2, ID for monthly background scheduling. No longer filled.

sy-batzo

c

1

In R/2, ID for single background scheduling. No longer filled.

sy-batzs

c

1

In R/2, ID for immediate background scheduling. No longer filled.

sy-batzw

c

1

In R/2, ID for weekly background scheduling. No longer filled.

sy-brep4

c

4

In R/2, ID for immediate spool output for background processing. No longer filled.

sy-bspld

c

1

In R/2, ID for immediate spool output for background processing. No longer filled.

sy-ccurs

p

9

In R/2, rate specification / result field from CURRENCY CONVERSION. No longer filled.

sy-ccurt

p

9

In R/2, table rate from CURRENCY CONVERSION. No longer filled.

sy-cdate

d

\-

In R/2, rate date from CURRENCY CONVERSION. No longer filled.

sy-ctabl

c

4

In R/2, rate table from CURRENCY CONVERSION. No longer filled.

sy-ctype

c

1

In R/2, rate type from CURRENCY CONVERSION. No longer filled.

sy-dcsys

c

4

Dialog system of the R/2 system. No longer filled.

sy-fmkey

c

3

Former function code menu. No longer filled.

sy-locdb

c

1

Local database, not implemented.

sy-locop

c

1

Local database operation, not implemented.

sy-lstat

c

16

Program-driven name for list levels. Can be filled with values when lists are created in the ABAP program. The value that applies when a list is completed is stored with the list. After an interactive list event, sy-lstat is set to the value assigned to it when the list where the event occurred was created. sy-lstat is no longer maintained and should therefore no longer be used.

sy-macdb

c

4

Previously, name of file for matchcode access. No longer filled.

sy-marky

c

1

Current line letter for the obsolete statement MARK from the R/2 system.

sy-msgli

c

60

Not documented. No longer filled.

sy-pagct

i

\-

In R/2, maximum number of pages per list. No longer filled.

sy-prefx

c

3

Prefix for background jobs. No longer filled.

sy-sfnam

c

30

Not documented.

sy-sponr

n

10

In R/2, spool files were processed using the statement TRANSFER, which also set sy-sponr. No longer filled.

sy-tfdsn

c

8

Former name of the external repository file for extracts. No longer filled.

sy-tmaxl

i

\-

Former maximum number of entries in an internal table. No longer filled.

sy-tname

c

12

Former name of an internal table after a read/write. No longer filled.

sy-toccu

i

\-

In the statements DESCRIBE TABLE, LOOP AT, and READ TABLE, sy-toccu was formerly given the value for the initial main memory requirements of the addressed internal table. No longer filled.

sy-tpagi

i

\-

Previously, ID whether an internal table is stored in the paging area. No longer filled.

sy-ttabc

i

\-

Former index of the last line read from an internal table. No longer filled.

sy-ttabi

i

\-

Former offset of internal tables in the program memory. No longer filled.

sy-waers

c

5

Former company code currency after posting segment is read. No longer filled.

sy-willi

i

\-

In R/2, number of the selected line of a list in details lists in a GUI window. Use sy-lilli instead.

sy-winco

i

\-

In R/2, cursor position in details lists in a GUI window. sy-cucol should be used instead.

sy-windi

i

\-

In R/2, index of the list in details lists in a GUI window. sy-lsind should be used instead.

sy-winro

i

\-

In R/2, cursor position in details lists in a GUI window. sy-curow should be used instead.

sy-winsl

c

79

In R/2, content of the selected line in details lists in a GUI window. sy-lisel should be used instead.

sy-winx1

i

\-

In R/2, window coordinates in details lists in a GUI window. No longer used.

sy-winx2

i

\-

In R/2, window coordinates in details lists in a GUI window. No longer used.

sy-winy1

i

\-

In R/2, window coordinates in details lists in a GUI window. No longer used.

sy-winy2

i

\-

In R/2, window coordinates in details lists in a GUI window. No longer used.

Spool Parameters   

[Spool parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters.htm) are passed from the runtime framework to the spool system in a structure of type PRI\_PARAMS. Before this structure was introduced, [system fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") were used. When spooling is activated today, a subset of the structure PRI\_PARAMS is still written to identically named system fields. This information is redundant and should not be used.

Name

Type

Length

Content

sy-paart

c

16

[Formatting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-pdest

c

4

[Output device](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-pexpi

n

1

[Retention period](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-plist

c

12

[Name of spool request](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prabt

c

12

[Department name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prbig

c

1

[Cover sheet](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prcop

n

3

[Number of copies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prdsn

c

6

[Name of the spool file](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-primm

c

1

[Print now](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prnew

c

1

[New spool request](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prrec

c

12

[Recipient name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prrel

c

1

[Delete now](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-prtxt

c

68

[Description text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

sy-rtitl

c

70

[Title of the spooler program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)


### abenscreen_structure_obsolete.htm

---
title: "The Built-In Structure screen"
description: |
  In dynpro(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm 'Glossary Entry') processing in dialog modules, the built-in data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete shor
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm"
abapFile: "abenscreen_structure_obsolete.htm"
keywords: ["loop", "do", "if", "try", "data", "abenscreen", "structure", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Built-In Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: The Built-In Structure screen, ABENSCREEN_STRUCTURE_OBSOLETE, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

The Built-In Structure screen

In [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") processing in dialog modules, the built-in data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete short forms.

-   [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_at_screen_obsolete.htm)
-   [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodify_screen_obsolete.htm)

can be used. A data object screen declared explicitly in the current context hides the built-in structure.

Hints

-   Instead of the built-in structure screen, explicitly declared work areas of the type SCREEN should be used in the long forms of the statements above.
-   LOOP AT SCREEN INTO screen or MODIFY SCREEN FROM screen should not be used to access the obsolete built-in structure, even in the long forms.
