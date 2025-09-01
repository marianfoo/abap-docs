---
title: "Obsolete System Fields"
description: |
  -   Former System Fields(#abensystem-fields-obsolete-1--------spool-parameters---@ITOC@@ABENSYSTEM_FIELDS_OBSOLETE_2) Former System Fields The following system fields(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm 'Glossary Entry') are obsolete and should
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_obsolete.htm"
abapFile: "abensystem_fields_obsolete.htm"
keywords: ["select", "delete", "loop", "do", "try", "data", "internal-table", "abensystem", "fields", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Predefined Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_obsolete.htm) → 

Obsolete System Fields

-   [Former System Fields](#abensystem-fields-obsolete-1--------spool-parameters---@ITOC@@ABENSYSTEM_FIELDS_OBSOLETE_2)

Former System Fields

The following [system fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") are obsolete and should no longer be used. Many originate from the R/2 era. The transition from R/2 to R/3 retained some system fields which are no longer provided with data.

Name

Type

Length

Content

sy-appli

x

2

An R/2 ID indicating which SAP applications are installed. No longer filled.

sy-batzd

c

1

An R/2 ID used for background jobs scheduled daily. No longer filled.

sy-batzm

c

1

An R/2 ID used for background jobs scheduled monthly. No longer filled.

sy-batzo

c

1

An R/2 ID used for background jobs scheduled once only. No longer filled.

sy-batzs

c

1

An R/2 ID used for background jobs scheduled to run immediately. No longer filled.

sy-batzw

c

1

An R/2 ID used for background jobs scheduled weekly. No longer filled.

sy-brep4

c

4

An R/2 ID used for background spool output. No longer filled.

sy-bspld

c

1

An R/2 ID used for background spool output. No longer filled.

sy-ccurs

p

9

An R/2 exchange rate/results field from CURRENCY CONVERSION. No longer filled.

sy-ccurt

p

9

An R/2 table rate from CURRENCY CONVERSION. No longer filled.

sy-cdate

d

\-

An R/2 quotation date from CURRENCY CONVERSION. No longer filled.

sy-ctabl

c

4

An R/2 exchange rate table from CURRENCY CONVERSION. No longer filled.

sy-ctype

c

1

An R/2 exchange rate indicator from CURRENCY CONVERSION. No longer filled.

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

Local database (not implemented).

sy-locop

c

1

Local database operation (not implemented).

sy-lstat

c

16

Program-driven name for list levels. Can be provided with values when lists are created by the ABAP program. The value that applies when a list is completed is saved with the list. After an interactive list event, sy-lstat is set to the value assigned to it when the list where the event occurred was created. sy-lstat is no longer defined and should therefore no longer be used.

sy-macdb

c

4

Former name of the file used to access matchcodes. No longer filled.

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

Maximum number of pages per list in R/2. No longer filled.

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

In R/2, spool files were edited using the statement TRANSFER, which also set sy-sponr. No longer filled.

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

Former ID indicating whether an internal table is paged out to the paging area. No longer filled.

sy-ttabc

i

\-

Former index of the last row read from an internal table. No longer filled.

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

I R/2, number of the selected row of a list in details lists in a GUI window . Use sy-lilli instead.

sy-winco

i

\-

In R/2, cursor position in details lists in a GUI window. Use sy-cucol instead.

sy-windi

i

\-

In R/2, index of the list in details lists in a GUI window. Use sy-lsind instead.

sy-winro

i

\-

In R/2, cursor position in details lists in a GUI window. Use sy-curow instead.

sy-winsl

c

79

In R/2, content of the selected row in details lists in a GUI window . Use sy-lisel instead.

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

[Spool parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm) are passed from the runtime environment to the spool system in a structure of type PRI\_PARAMS. Before this structure was introduced, [system fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") were used. When spooling is activated today, a subset of the structure PRI\_PARAMS is still written to system fields of the same name. This information is redundant and should not be used.

Name

Type

Length

Content

sy-paart

c

16

[Formatting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-pdest

c

4

[Output device](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-pexpi

n

1

[Retention period](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-plist

c

12

[Name of spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prabt

c

12

[Department name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prbig

c

1

[Cover sheet](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prcop

n

3

[Number of copies](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prdsn

c

6

[Name of the spool file](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-primm

c

1

[Print now](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prnew

c

1

[New spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prrec

c

12

[Recipient name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prrel

c

1

[Delete now](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-prtxt

c

68

[Description text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

sy-rtitl

c

70

[Title of the spooler program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)