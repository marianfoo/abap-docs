  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  G

GET DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_dataset.htm)

Syntax

GET DATASET dset *\[*POSITION pos*\]* *\[*ATTRIBUTES attr*\]*.

Effect

Defines the properties of a file opened using OPEN DATASET.

Additions

-   POSITION pos
    Gets the current position of the file pointer in pos.
    
-   ATTRIBUTES attr
    Gets the properties of the file in the structure attr of the type DSET\_ATTRIBUTES.