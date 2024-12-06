param(
    [string]$Path,
    [switch]$Verbose,
    [switch]$Remove,
    [switch]$RemoveQuotes
)

$variables = Get-Content -Path $Path | Select-String -Pattern '^\s*[^\s=#]+=[^\s]+$'

foreach ($var in $variables) {
    $keyVal = $var -split '=', 2
    $key = $keyVal[0].Trim()
    if ($RemoveQuotes) {
        $val = $keyVal[1].Trim("'").Trim('"')
    } else {
        $val = $keyVal[1]
    }
    if ($Remove) {
        [Environment]::SetEnvironmentVariable($key, '', [System.EnvironmentVariableTarget]::Machine)
    } else {
        [Environment]::SetEnvironmentVariable($key, $val, [System.EnvironmentVariableTarget]::Machine)
    }
    if ($Verbose) {
        "$key=$([Environment]::GetEnvironmentVariable($key, [System.EnvironmentVariableTarget]::Machine))"
    }
}