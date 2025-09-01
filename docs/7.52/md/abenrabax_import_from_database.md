  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Clusters](javascript:call_link\('abendata_cluster.htm'\)) →  [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) → 

Exceptions in IMPORT

Handleable Exceptions

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: Error in conversion.
    Runtime error: CONNE\_IMPORT\_CONVERSION\_ERROR
    

CX\_SY\_IMPORT\_MISMATCH\_ERROR

-   Cause: A component of a structured dataset has an incorrect decimal place.
    Runtime error: CONNE\_IMPORT\_WRONG\_COMP\_DECS
    
-   Cause: A component of a structured dataset has an incorrect length.
    Runtime error: CONNE\_IMPORT\_WRONG\_COMP\_LENG
    
-   Cause: A component of a structured type in the dataset has an incorrect type.
    Runtime error: CONNE\_IMPORT\_WRONG\_COMP\_TYPE
    
-   Cause: A field in the dataset has incorrect decimal places.
    Runtime error: CONNE\_IMPORT\_WRONG\_FIELD\_DECS
    
-   Cause: A field in the dataset has an incorrect length.
    Runtime error: CONNE\_IMPORT\_WRONG\_FIELD\_LENG
    
-   Cause: A field in the dataset has an incorrect type.
    Runtime error: CONNE\_IMPORT\_WRONG\_FIELD\_TYPE
    
-   Cause: Type conflict between simple and structured data types.
    Runtime error: CONNE\_IMPORT\_WRONG\_OBJECT\_TYPE
    
-   Cause: Type conflict between structured objects
    Runtime error: CONNE\_IMPORT\_WRONG\_STRUCTURE
    
-   Cause: Source object and target object have incompatible types.
    Runtime error: IMPORT\_ALIGNMENT\_MISMATCH
    
-   Cause: Dataset has a different length.
    Runtime error: IMPORT\_WRONG\_END\_POS
    

CX\_SY\_IMPORT\_FORMAT\_ERROR

-   Cause: Error in the data description of a stored data object.
    Runtime error: IMPORT\_FORMAT\_ERROR
    
-   Cause: Error in the data description.
    Runtime error: IMPORT\_DESCR\_ENDMARK\_MISSING
    
-   Cause: The dataset was destroyed. The data is distributed among several table entries, and at least one table entry is missing.
    Runtime error: IMPORT\_UNEXPECTED\_END\_OF\_DATA
    
-   Cause: Error in decompression.
    Runtime error: IMPORT\_DECOMPRESS\_FAILED
    
-   Cause: Invalid or missing data cluster in IMPORT FROM INTERNAL TABLE
    Runtime error: IMPORT\_CONTAINER\_MISSING
    
-   Cause: Empty internal table in IMPORT FROM INTERNAL TABLE
    Runtime error: IMPORT\_CONTAINER\_MISSING
    
-   Cause: Empty data object in IMPORT FROM DATA BUFFER
    Runtime error: IMPORT\_CONTAINER\_MISSING
    
-   Cause: The data cluster was destroyed.
    Runtime error: IMPORT\_OBJECT\_DESTROYED
    
-   Cause: Invalid or missing data cluster in IMPORT FROM DATA BUFFER
    Runtime error: CONNE\_CONTAINER\_TOO\_SHORT
    
-   Cause: The dataset was destroyed.
    Runtime error: CONNE\_ILLEGAL\_TRANSPORT\_HEADER
    
-   Cause: An attempt was made to import a dataset originating from an AS ABAP of a higher release level. This action is not supported.
    Runtime error: CONNE\_ILLEGAL\_TRANSPORT\_VERS
    
-   Cause: Error in data description in IMPORT.
    Runtime error: CONNE\_IMPORT\_ILL\_DESCRIPTION
    
-   Cause: One of the properties saved for the cluster is invalid.
    Runtime error: CONNE\_COMPRESS\_FLAG\_INVALID
    Runtime error: CONNE\_DESCRIPTION\_FLAG\_INVALID
    Runtime error: CONVERSION\_CODEPAGE\_UNKNOWN
    

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   SQL error in import from the database.
    Runtime error: [DBIF\_...](javascript:call_link\('abenopensql_exceptions.htm'\))
    

Non-Handleable Exceptions

-   Cause: The object name in the cluster is empty (the content of the first column).
    Runtime error: DYN\_IMEX\_OBJ\_NAME\_EMPTY
    
-   Cause: An object name (in the cluster) occurs twice in the first column of the internal table.
    Runtime error: DYN\_IMEX\_OBJ\_NAME\_TWICE
    
-   Cause: The data object in the program (that is, the object whose name is in column 2 if this column is not empty, otherwise in column 1) does not exist.
    Runtime error: DYN\_IMEX\_OBJ\_NOT\_FOUND
    
-   Cause: Error in import from the transactional application buffer
    Runtime error: IMPORT\_BUFFER\_FAILED
    Runtime error: IMPORT\_BUFFER\_EXTERNAL\_ERROR
    Runtime error: IMPORT\_BUFFER\_INTERNAL\_ERROR
    Runtime error: IMPORT\_BUFFER\_KEY\_NOT\_FOUND